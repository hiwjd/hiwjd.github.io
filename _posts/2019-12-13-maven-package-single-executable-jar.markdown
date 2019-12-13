---
layout: post
title:  "maven打可执行jar包"
date:   2019-12-13
categories: post
---

有些时候我们想打个普通的可执行jar包，可以这么做：

随意找个地方建有入口函数的类，比如在`com.company.project`包下建了类`Abc`:

```
public class Abc {

    public static void main(String[] args) {
        System.out.println("hello");
    }   
    
}
```

然后在这个模块的`pom.xml`配置里，加上构建的配置:

```
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-assembly-plugin</artifactId>
            <executions>
                <execution>
                    <phase>package</phase>
                    <goals>
                        <goal>single</goal>
                    </goals>
                    <configuration>
                        <archive>
                            <manifest>
                                <mainClass>com.company.project.Abc</mainClass> <!--这里写有主函数的类-->
                            </manifest>
                        </archive>
                        <descriptorRefs>
                            <descriptorRef>jar-with-dependencies</descriptorRef>
                        </descriptorRefs>
                    </configuration>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

然后执行:

```
mvn package
```

没错的话，会在`target`目录里生成`xxx-jar-with-dependencies.jar`文件，执行看看把。
