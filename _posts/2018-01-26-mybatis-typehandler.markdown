---
layout: post
title:  "mybatis TypeHandler 应用"
date:   2018-01-26 11:02:00
categories: post
---

有这样一个需求：需要存类别ID的全路径，实际的逻辑意义不大，因此增加了一个类型是`varchar(500)`的字段用逗号分隔的方式来保存。

但是这样一来存取时需要添加一些转换代码，有点丑。。想着能不能用`TypeHandler`来处理。

```
List<String> -> StringSplitListStringTypeHandler -> insert,update(varchar(500))

select(varchar(500)) -> StringSplitListStringTypeHandler -> List<String>
```

实现的`TypeHandler`如下：

```
public class StringSplitListStringTypeHandler extends BaseTypeHandler<List<String>> {

    private static final String SEP = ",";

    @Override
    public void setNonNullParameter(PreparedStatement ps, int i, List<String> parameter, JdbcType jdbcType) throws SQLException {
        ps.setString(i, StrUtil.joinStr(parameter, SEP));
    }

    @Override
    public List<String> getNullableResult(ResultSet rs, String columnName) throws SQLException {
        String str = rs.getString(columnName);
        return StrUtil.splitToStr(str, SEP);
    }

    @Override
    public List<String> getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
        String str = rs.getString(columnIndex);
        return StrUtil.splitToStr(str, SEP);
    }

    @Override
    public List<String> getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
        String str = cs.getString(columnIndex);
        return StrUtil.splitToStr(str, SEP);
    }
}
```

比如表映射的类是`SomeType`：

```
class SomeType {
    private Integer id;
    private List<String> ids;
    ...
}
```

insert,update的时候，需要对参数字段指定TypeHandler：
```
#{ids,typeHandler=StringSplitListStringTypeHandler}
```

select的时候，使用resultMap：

```
<resultMap id="someResult" type="SomeType" autoMapping="true">
    <id property="id" column="id" />
    <result property="ids" column="ids" typeHandler="StringSplitListStringTypeHandler" />
</resultMap>

<select id="get" parameterType="Integer" resultMap="tplResult">
    SELECT id, ids FROM `tbl` WHERE `id` = #{id}
</select>
```
