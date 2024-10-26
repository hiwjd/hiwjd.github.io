---
layout: post
title:  "Blender备忘"
date:   2024-10-13
categories: post
---

## 基础操作

1. 鼠标中键调整视角

2. `Shift+鼠标中键`移动视角

3. `Shift+C` 恢复游标到世界中心

4. `Shift+S` 呼出游标相关菜单，其中`Selection to Cursor`把选中对象中心点移动到游标处，`Cursor to Selected`把游标移动到选中点

5. `Shift+A` 创建对象

6. `Shift+D` 复制对象

7. `X` 删除对象

8. `G`/`G+X/Y/Z`移动对象，如果按了`X/Y/Z`其中之一，表示只在对应坐标系上移动

9. `S`/`S+X/Y/Z`缩放对象，如果按了`X/Y/Z`其中之一，表示只在对应坐标系上缩放

10. `R`/`R+X/Y/Z`旋转对象，如果按了`X/Y/Z`其中之一，表示只围绕对应坐标系上旋转

11. `Shift+Tab`开启吸附，开启后默认对移动生效，这样对象会按固定间距移动。在顶部找到一个磁铁图标的菜单，单击打开可以设置吸附方式，开启对旋转或者缩放生效等。

12. `N`呼出右侧工具栏，在`Tools/Options/Transform/Affect Only`选项内可以修改操作影响的范围，勾选`Origins`后，只影响对象的原点。比如勾选`Origins`后把方块的原点移动到底面，那么缩放只会影响到方块上方。在编辑模式下移动对象时，对象原点是不动的，也可以用这个方式移动原点。

13. 创建`Curve/Path`后，可以在右侧有个曲线图标的设置中，找到`Geometry/Bevel/Round/Depth`，调整数值给曲线增加直径。选中曲线后，右键`Convert To/Mesh`菜单可以把曲线对象转换成网格。

14. 右侧有个扳手图标的菜单是修改器，`Add Modifier/Generate/Array`复制对象

15. 修改器，`Add Modifier/Generate/Bevel`倒脚

16. 修改器，`Add Modifier/Generate/Subdivision Surface`表面细分，快捷键`Cmd+N`，N表示要细分的面数

17. 鼠标选中对象后`Tab`，进入编辑模式，此时左侧会出现各种可以操作的菜单

18. 编辑模式，左上角有3种选择模式可以切换，分别是点、线、面，对应的快捷键分别是1、2、3。注意，英文输入法时才有用。

19. 选中面，`E`/`E+X/Y/Z`挤出。

20. 选中面，`I`插入面。

21. 选中线，`Cmd+B`倒角。

22. `Option+选择线`可以一次多选一环线

23. `Shift+选择点、线、面`可以追加选择的对象

24. 顶部菜单`Proportional mode`是衰减编辑，开启后，可以通过鼠标滚轮调整影响范围，之后类似`G`移动的效果会影响到指定范围内的非选中对象。

25. `Option+Z`透显模式，`长按Z`线框、透显、渲染模式选择

26. `H`隐藏选中对象，`Option+H`显示隐藏对象

27. `Option+S`缩放路径曲线直径

28. `Cmd+R`环切

29. `M`创建集合

30. `Ctrl+Tab`切换模式：`Object Mode`对象模式，`Edit Mode`编辑模式，`Weight Paint`骨骼权重绘制模式等。在骨骼权重绘制模式下，在右下侧`Tool`工具栏中，可以切换`Add`、`Subtract`笔刷来加强或减弱骨骼的网格的影响，红色是影响最大，蓝色是最小。

31. 骨骼编辑模式下，`Option+P`呼出`Disconnect Bone`分离骨骼

32. 骨骼命名为`.L`或者`_L`结尾，在骨骼编辑模式下，选中需要生成对成的骨骼（比如左手）或者全选，使用`Armature/Symmetrize`对称功能可以实现

33. 选中对象，`Shift`加选骨骼后，`Ctrl+P`后可以在呼出的菜单中通过`Armature Deform/With Automatic Weights`进行自动绑骨
