GDPC                                                                            '   <   res://.import/icon.png-487276ed1e3a0c39cad0279d744ee560.stex�Q      U      -��`�0��x�5�[   res://Bouncer.gd.remap  pa      "       '`�޴݃��d�[ o/   res://Bouncer.gdc   `	      �      |]P4��x��v�?   res://Bouncer.tscn         p      �WJ��������ߖ   res://Bullet.gd.remap   �a      !       טdZ�=���B!��q'5   res://Bullet.gdcp            D��6i;i��S�.]CD   res://Bullet.tscn   �      �      �A�t��Δ4I~��%   res://EnemyBullet.tscn  0      8      �N���j#��ǩ�   res://Global.gd.remap   �a      !       z�<��z]
����*Xn   res://Global.gdcp      �       q�s�����q��B_   res://Junk.gd.remap  b             L�׭`��va��    res://Junk.gdc  0            u{
h�*#�L�6!��   res://Junk.tscn @      T      Y`сס�!�o���   res://JunkShip.gd.remap  b      #       �k�ln����Jq	�   res://JunkShip.gdc  �             v-R��q1�	+4[   res://JunkShip.tscn �"      �      �����J�-��h�qo{   res://LifeBar.gd.remap  Pb      "       �r�%/@�-�oiCM�G�   res://LifeBar.gdc   p%      �      �@\�3��@��skZ}   res://LifeBar.tscn  0'      �      �g�piJ�u�2��q�K   res://Player.gd.remap   �b      !       ��0�F �qq��dX��   res://Player.gdc�(      	      C�~�GA�ڊ�|�S0   res://Player.tscn   �1      �      Qz��D���R�Cu�   res://PlayerBullet.gd.remap �b      '       �����B�H�x8+�G   res://PlayerBullet.gdc  �5      �       ��K`��x6fk���;�V   res://PlayerBullet.tscn `6      H      ���o�e�v�X�4gl��   res://ShooterJunk.gd.remap  �b      &       +.��i��ʎ^���   res://ShooterJunk.gdc   �7      �       �ٔ�]W���*   res://ShooterJunk.tscn  �8            �~���)���`Kh\�    res://ShooterJunkShip.gd.remap  c      *       O�z�f���XX�9�$p   res://ShooterJunkShip.gdc   �:      �      ��i	��Fb�T	^� $   res://ShooterJunkShip.tscn  �=      1      �mKˣ����t��G�   res://Shuffler.gd.remap @c      #       f���rXu���D�$�   res://Shuffler.gdc  �@      �      �w�ћ,�#��qx�ķ   res://Shuffler.tscn �H            7D�Dљ��������   res://TestScene.tscn�L      �      ���*��o 7x��K��   res://default_env.tres  �P      �       um�`�N��<*ỳ�8   res://icon.png  pc      �      G1?��z�c��vN��   res://icon.png.import   �^      �      �����%��(#AB�   res://project.binary`p      �      ���P�_g4	::��            GDSC         '         ������������τ�   ���������Ӷ�   �ƶ�   ���������Ҷ�   �������Ķ���   ��������   �����϶�   ���������Ķ�   ���������������Ŷ���   ����׶��   ��������ض��   ���������������Ӷ���   �������ض���   ζ��   ����������������¶��   ���Ӷ���   ϶��   ����Ӷ��   �涶   ������Ҷ   �����Ӷ�   ��Ѷ   ���ڶ���   ���Ӷ���   �������Ӷ���   �������Ӷ���   ��������Ҷ��   ��������������ض   ��������������ض   �������ض���   ���������Ӷ�      res://Junk.tscn          d                      ../                                                     	   !   
   "      (      ,      0      1      8      B      F      J      p      t      �      �      �      �      �      �      �      �      �      �      �       �   !   �   "   �   #   �   $   �   %   �   &   �   '   3YY;�  ?PQYY8;�  �  YY8;�  �  YY;�  �  T�  YY0�  PQV�  �%  PQ�  �  PQYY0�  P�	  QV�  ;�
  �  P�  �	  Q�  &�
  V�  �  PQ�  &�  T�  	�  �  T�  �  PQT�  T�  �  T�  	�  �  T�  �  PQT�  T�  V�  �  PQ�  �  T�  �5  P�  T�  R�  R�  PQT�  T�  Q�  �  T�  �5  P�  T�  R�  R�  PQT�  T�  QYY0�  PQV�  ;�  �(  P�  R�  ZQ�  �  �  T�  T�  P�  Q�  YY0�  P�  QV�  �  �  �  &�  
�  V�  �  PQYY0�  PQV�  ;�  �  T�  PQ�  �  P�  QT�  P�  Q�  �  T�  �  �  �  T�  �  �  �  PQY`      [gd_scene load_steps=4 format=2]

[ext_resource path="res://Bouncer.gd" type="Script" id=1]
[ext_resource path="res://LifeBar.tscn" type="PackedScene" id=2]

[sub_resource type="CircleShape2D" id=1]
radius = 24.0

[node name="Bouncer" type="KinematicBody2D"]
collision_layer = 4
collision_mask = 7
script = ExtResource( 1 )

[node name="Polygon2D" type="Polygon2D" parent="."]
polygon = PoolVector2Array( 0, -24, 16, -16, 24, 0, 16, 16, 0, 24, -16, 16, -24, 0, -16, -16 )

[node name="CollisionShape2D" type="CollisionShape2D" parent="."]
shape = SubResource( 1 )

[node name="LifeBar" parent="." instance=ExtResource( 2 )]
GDSC            �      ������������τ�   �����¶�   �����������Ҷ���   �����Ӷ�   ��ڶ   ��������   ���������������Ŷ���   ����׶��   ��������ض��   ���������������Ӷ���   �������Ķ���   ���������Ҷ�   ���������Ӷ�   �������ض���   ζ��   ����������������¶��   ���Ӷ���   ϶��   �����������¶���   ��Ŷ   ��¶   �������ض���   ����ⶶ�   ������Ҷ   ����������������¶��   p              damage                                                          !   	   +   
   ,      0      ;      D      H      I      J      p      t      u      ~      �      �      �      �      �      �      �      �      3Y2�  YY8;�  Y8;�  �  Y;�  �  T�  YY0�  P�  QV�  ;�  �	  P�  �  Q�  �  &�  V�  &�  T�
  T�  P�  QV�  �  T�
  T�  P�  Q�  �  PQ�  �  �  &�  T�  	�  �  T�  �  PQT�  T�  �  T�  	�  �  T�  �  PQT�  T�  V�  �  PQYY0�  P�  R�  QV�  �  �  �  �  �  �  �  �  T�  T�  P�  Q�  YYYY0�  PQV�  �  PQY`               [gd_scene load_steps=3 format=2]

[ext_resource path="res://Bullet.gd" type="Script" id=1]

[sub_resource type="CircleShape2D" id=1]
radius = 4.0

[node name="Bullet" type="KinematicBody2D"]
collision_layer = 0
collision_mask = 0
script = ExtResource( 1 )

[node name="CollisionShape2D" type="CollisionShape2D" parent="."]
shape = SubResource( 1 )

[node name="Polygon2D" type="Polygon2D" parent="."]
rotation = 1.5708
polygon = PoolVector2Array( 0, -4, -4, 0, -4, 4, 0, 0, 4, 4, 4, 0 )

[node name="Timer" type="Timer" parent="." groups=[
"Player Bullets",
]]
wait_time = 10.0
autostart = true
[connection signal="timeout" from="Timer" to="." method="_on_Timer_timeout"]
[gd_scene load_steps=2 format=2]

[ext_resource path="res://Bullet.tscn" type="PackedScene" id=1]

[node name="EnemyBullet" groups=[
"Enemy Bullets",
] instance=ExtResource( 1 )]
collision_layer = 8
collision_mask = 33
bullet_speed = 600

[node name="Polygon2D" parent="." index="1"]
color = Color( 1, 0, 0, 1 )
        GDSC                  ���Ӷ���   �����Ķ�   �������������Ķ�                             	                        3YY;�  YY0�  PQV�  &�  V�  .�  Y`              GDSC            �      ������������τ�   ���ݶ���   ��������������Ӷ   ��������Ҷ��   ���������Ҷ�   �������Ķ���   �����϶�   ���ض���   ���������������Ŷ���   ����׶��   �������ض���   ��������ض��   ���������������Ӷ���   ��������   �������Ķ���   ���������Ҷ�   �����޶�   �������ض���   ���������Ӷ�   ϶��   ����������������¶��   ���Ӷ���      res://JunkShip.tscn       @   <                            attach                                                   "   	   #   
   )      -      6      <      A      D      H      I      P      X      Y      g      t      �      �      �      �      �      3Y2�  YY8;�  ?PQYY8;�  �  Y8;�  �  Y8;�  �  YY0�  PQV�  �%  PQ�  ;�  �&  PQ�  �  &�  �  V�  �  �  �  (V�  �  �  YY0�  P�	  QV�  �
  �  �  �	  �  �  ;�  �  P�  T�  �  �	  Q�  &�  �  T�  T�  P�  QV�  �  T�  T�  P�  R�  R�
  Q�  �  PQ�  �  &�  T�  �  PQT�  T�  V�  �  PQY`              [gd_scene load_steps=3 format=2]

[ext_resource path="res://Junk.gd" type="Script" id=1]


[sub_resource type="CircleShape2D" id=1]
radius = 24.0

[node name="JunkTest" type="KinematicBody2D" groups=[
"Free Junk",
]]
collision_layer = 16
collision_mask = 33
script = ExtResource( 1 )

[node name="Polygon2D" type="Polygon2D" parent="."]
position = Vector2( 0, 8 )
color = Color( 0.588235, 0.588235, 0.588235, 1 )
polygon = PoolVector2Array( 0, -32, 24, -24, 32, 0, 8, 0, 0, 24, -8, 8, -24, 0, -16, -24 )

[node name="CollisionShape2D" type="CollisionShape2D" parent="."]
shape = SubResource( 1 )
            GDSC            L      ������������τ�   �������ƶ���   �ƶ�   �����޶�   ����Ӷ��   ��Ŷ   ��¶   ���Ӷ���   �������Ӷ���   ��������Ҷ��   ��������������ض   ��������������ض   �����Ӷ�   ��Ѷ   ���������Ӷ�                                                        !      (   	   .   
   4      5      <      @      F      J      3Y2�  YY8;�  YY0�  P�  R�  R�  QV�  ;�  �  T�  PQ�  T�	  P�  Q�  �  T�
  �  �  �  T�  �  YY0�  P�  QV�  �  �  �  &�  
�  V�  �  PQY`   [gd_scene load_steps=4 format=2]

[ext_resource path="res://JunkShip.gd" type="Script" id=1]
[ext_resource path="res://LifeBar.tscn" type="PackedScene" id=2]

[sub_resource type="CircleShape2D" id=1]
radius = 24.0

[node name="JunkTest" type="KinematicBody2D" groups=[
"Player Junk",
]]
collision_layer = 32
collision_mask = 28
script = ExtResource( 1 )

[node name="Polygon2D" type="Polygon2D" parent="."]
position = Vector2( 0, 8 )
polygon = PoolVector2Array( 0, -32, 24, -24, 32, 0, 8, 0, 0, 24, -8, 8, -24, 0, -16, -24 )

[node name="CollisionShape2D" type="CollisionShape2D" parent="."]
shape = SubResource( 1 )

[node name="LifeBar" parent="." instance=ExtResource( 2 )]
           GDSC            >      ���ӄ�   �����������Ӷ���   �Զ�   ����������Ķ   �����϶�   ��������Ӷ��   �ƶ�   ����Ӷ��   ���������������Ŷ���   ����׶��   ��������������ض      ../                           
                               (   	   )   
   0      4      <      3YY5;�  WY5;�  W�  YY0�  PQV�  �  T�  �  T�  �  �  T�  �  T�  YY0�  P�	  QV�  �
  �  �  �  T�  �  T�  Y`      [gd_scene load_steps=2 format=2]

[ext_resource path="res://LifeBar.gd" type="Script" id=1]

[node name="LifeBar" type="Node2D"]
script = ExtResource( 1 )

[node name="ProgressBar" type="ProgressBar" parent="."]
margin_left = -32.0
margin_top = -48.0
margin_right = 32.0
margin_bottom = -34.0
max_value = 10.0
step = 1.0
value = 10.0
percent_visible = false
__meta__ = {
"_edit_use_anchors_": false
}
               GDSC   5      :   t     ������������τ�   �����������Ӷ���   ���������������Ķ���   ��������������Ķ   �������������Ķ�   ������������Ķ��   ��ض   ��ض   ����Ķ��   ����Ķ��   ���������Ҷ�   ��������Ҷ��   �ƶ�   �����϶�   ����������������ڶ��   �������ض���   ���������������Ŷ���   ����׶��   ������¶   ������������������������ض��   ��Ķ   ������Ķ   ��ڶ   ���������Ҷ�   �������������Ӷ�   ��������   �������ض���   ζ��   ����������������¶��   ���Ӷ���   ϶��   ����¶��   ����������������Ҷ��   ���������Ҷ�   ���Ӷ���   ������������������޶   ����������Ķ   �����¶�   �������Ӷ���   �����������¶���   ��������������ض   ��������Ҷ��   ����¶��   �����޶�   ����Ӷ��   ��Ŷ   ��¶   ���Ӷ���   ��������������ض   �����ڶ�   �����Ķ�   �����Ӷ�   ��Ѷ      res://PlayerBullet.tscn    '           
                      shoot         ui_right      ui_left       ui_down       ui_up         rotate_right      rotate_left                                            !      (   	   )   
   /      5      ;      <      B      F      M      N      U      \      c      p      q      r      {      �      �      �      �      �      �      �       �   !   �   "   �   #   �   $   �   %   �   &     '   	  (   
  )     *     +   $  ,   +  -   1  .   2  /   =  0   F  1   M  2   S  3   Y  4   Z  5   `  6   f  7   g  8   n  9   r  :   3YY;�  ?PQYY5;�  W�  Y5;�  W�  Y5;�  W�  Y5;�  W�	  YY8;�
  �  Y8;�  �  Y8;�  �  YY0�  PQV�  �  PQ�  �  Z�  YY0�  P�  QV�  �  P�  PQQ�  ;�  �  PQ�  ;�  �  T�  PQ�
  �  �  �  �  �  P�  R�  T�  Q�  �  T�  �5  P�  T�  R�  R�  PQT�  T�  Q�  �  T�  �5  P�  T�  R�  R�  PQT�  T�  Q�  �  &�  T�   P�  Q�  T�!  PQV�  �"  PQYY0�  PQV�  ;�  �  T�  �  �  T�  �  T�#  P�  Q�  T�#  P�  Q�  �  T�  �  T�#  P�	  Q�  T�#  P�
  Q�  .�  YY0�$  PQV�  ;�  �  T�#  P�  Q�  T�#  P�  Q�  .�  YY0�"  PQV�  ;�%  �  T�&  PQ�  �%  T�'  P�  T�(  R�  Q�  �  T�)  P�%  Q�  �  T�*  PQYY0�+  P�,  R�-  R�.  QV�  ;�/  �,  T�&  PQ�  �  T�)  P�/  Q�  �/  T�(  �-  �  �/  T�0  �.  YY0�  PQV�  �1  T�2  YY0�3  P�4  QV�  �  �4  Y`          [gd_scene load_steps=4 format=2]

[ext_resource path="res://Player.gd" type="Script" id=1]
[ext_resource path="res://LifeBar.tscn" type="PackedScene" id=2]

[sub_resource type="CircleShape2D" id=1]
radius = 11.3137

[node name="Player" type="KinematicBody2D" groups=[
"Player",
]]
collision_mask = 12
script = ExtResource( 1 )
move_speed = 15000

[node name="Polygon2D" type="Polygon2D" parent="."]
position = Vector2( -8, 0 )
rotation = 1.5708
polygon = PoolVector2Array( 0, -40, 24, 16, 0, 0, -24, 16 )

[node name="CollisionShape2D" type="CollisionShape2D" parent="."]
shape = SubResource( 1 )

[node name="BulletContainer" type="Node" parent="."]

[node name="Timer" type="Timer" parent="."]
wait_time = 0.2
one_shot = true

[node name="JunkContainer" type="Node2D" parent="."]

[node name="Gun" type="Position2D" parent="."]
position = Vector2( 32, 0 )

[node name="LifeBar" parent="." instance=ExtResource( 2 )]
          GDSC                   �����¶�   �����϶�                                                 	   	   
   
                                             3YYYYYYYYY0�  PQV�  -YYYYYY`         [gd_scene load_steps=3 format=2]

[ext_resource path="res://Bullet.tscn" type="PackedScene" id=1]
[ext_resource path="res://PlayerBullet.gd" type="Script" id=2]

[node name="PlayerBullet" groups=[
"Player Bullets",
] instance=ExtResource( 1 )]
collision_layer = 2
collision_mask = 4
script = ExtResource( 2 )
bullet_speed = 600
        GDSC                   ���ݶ���   �����϶�                                                 	   	   
   
                                             3YYYYYYYYY0�  PQV�  -YYYYYY`         [gd_scene load_steps=4 format=2]

[ext_resource path="res://Junk.tscn" type="PackedScene" id=1]
[ext_resource path="res://ShooterJunk.gd" type="Script" id=2]
[ext_resource path="res://ShooterJunkShip.tscn" type="PackedScene" id=3]

[node name="ShooterJunk" instance=ExtResource( 1 )]
script = ExtResource( 2 )
junk_ship_scene = ExtResource( 3 )

[node name="Polygon2D" parent="." index="0"]
polygon = PoolVector2Array( 0, -32, 0, -24, 32, -16, 0, -16, 0, 0, 32, 0, 0, 8, 0, 16, -16, 8, -24, 0, -24, -16, -16, -24 )
             GDSC            f      �������ƶ���   �����������Ӷ���   ��ض   ��ض   ���������������Ķ���   ��������������Ķ   ����Ķ��   ����Ķ��   ���������������Ŷ���   ����׶��   ����¶��   ����������������Ҷ��   ���������Ҷ�   ���Ӷ���   �����¶�   �������Ӷ���   �����������¶���   ��������������ض   ��������������ض   ��������Ҷ��   ����¶��      res://PlayerBullet.tscn       shoot                                              !      "   	   )   
   8      <      =      C      L      W      ^      d      3YY;�  ?PQYY5;�  W�  Y5;�  W�  Y5;�  W�  YY0�  P�	  QV�  &�
  T�  P�  Q�  T�  PQV�  �  PQYY0�  PQV�  ;�  �  T�  PQ�  �  T�  P�  T�  R�  Q�  �  T�  P�  Q�  �  T�  PQY`         [gd_scene load_steps=4 format=2]

[ext_resource path="res://JunkShip.tscn" type="PackedScene" id=1]
[ext_resource path="res://ShooterJunkShip.gd" type="Script" id=2]
[ext_resource path="res://LifeBar.tscn" type="PackedScene" id=3]

[node name="ShooterJunkShip" instance=ExtResource( 1 )]
script = ExtResource( 2 )

[node name="Polygon2D" parent="." index="0"]
polygon = PoolVector2Array( 0, -32, 0, -24, 32, -16, 0, -16, 0, 0, 32, 0, 0, 8, 0, 16, -16, 8, -24, 0, -24, -16, -16, -24 )

[node name="Gun" type="Position2D" parent="." index="2"]
position = Vector2( 24, 0 )

[node name="BulletContainer" type="Node" parent="." index="3"]

[node name="Timer" type="Timer" parent="." index="4"]
wait_time = 0.2
one_shot = true

[node name="LifeBar" parent="." index="5" groups=[
"Player Junk",
] instance=ExtResource( 3 )]
               GDSC   2      7   O     ������������τ�   �����Ķ�   �����������Ӷ���   ���������Ӷ�   ���������������Ķ���   ��������������Ķ   ��������Ķ��   �������Ķ���   ���������Ķ�   ��������Ķ��   ��ض   ��ض   ������Ķ   ������Ķ   ���������Ҷ�   �ƶ�   �������Ķ���   ��������   �����϶�   �����ڶ�   �������������Ķ�   ���������������Ŷ���   ����׶��   ������¶   ��������������ض   ���������Ҷ�   ���Ӷ���   ���������Ķ�   �������������Ӷ�   �������ض���   ζ��   ����������������¶��   ���Ӷ���   ϶��   ����Ӷ��   �涶   ������Ҷ   ����¶��   �����¶�   �������Ӷ���   �����������¶���   �������ض���   ��������Ҷ��   �����Ӷ�   ��Ѷ   ���ڶ���   ���Ӷ���   �������Ӷ���   ��������������ض   ���������Ӷ�          res://EnemyBullet.tscn        res://ShooterJunk.tscn     d                            ../                          	                        !   	   (   
   /      6      =      >      D      J      K      R      S      Y      a      e      f      m      t      |      �      �      �      �      �      �       �   !   �   "   �   #   �   $   �   %   �   &   �   '   �   (      )     *     +     ,     -     .     /   #  0   $  1   *  2   3  3   =  4   C  5   I  6   M  7   3YY;�  YY;�  ?P�  QY;�  ?P�  QYY5;�  W�  Y5;�  W�  Y5;�  W�	  Y5;�
  W�  Y5;�  W�  YY8;�  �  Y8;�  �  YY;�  �  T�  YY0�  PQV�  �  �  T�  PQ�  �%  PQYY0�  P�  QV�  �  P�  T�  Q�  &�  T�  PQV�  �  PQ�  &�  T�  PQV�  �  PQ�  �  P�  R�  T�  Q�  �  T�  �5  P�  T�  R�  R�  PQT�   T�  Q�  �  T�!  �5  P�  T�!  R�  R�  PQT�   T�!  QYY0�  PQV�  ;�"  �(  P�  R�  ZQ�  �  �  T�#  T�$  P�"  Q�  �  �  T�%  PQYY0�  PQV�  ;�&  �  T�'  PQ�  �&  T�(  P�
  T�  R�)  Q�  �  T�*  P�&  Q�  �  T�%  PQYY0�+  P�,  QV�  �  �,  �  &�  
�  V�  �-  PQYY0�-  PQV�  ;�.  �  T�'  PQ�  �/  P�  QT�*  P�.  Q�  �.  T�  �  �  �.  T�0  �)  �  �1  PQY`   [gd_scene load_steps=4 format=2]

[ext_resource path="res://Shuffler.gd" type="Script" id=1]
[ext_resource path="res://LifeBar.tscn" type="PackedScene" id=2]

[sub_resource type="RectangleShape2D" id=1]
extents = Vector2( 24, 16 )

[node name="Shuffler" type="KinematicBody2D" groups=[
"Enemies",
]]
collision_layer = 4
collision_mask = 39
script = ExtResource( 1 )

[node name="Polygon2D" type="Polygon2D" parent="."]
rotation = 1.5708
polygon = PoolVector2Array( -8, 8, -16, 8, -8, 24, 8, 24, 16, 8, 8, 8, 16, -8, 8, -32, 8, -16, 0, 0, -8, -16, -8, -32, -16, -8 )

[node name="CollisionShape2D" type="CollisionShape2D" parent="."]
shape = SubResource( 1 )

[node name="GunTimer" type="Timer" parent="."]
wait_time = 0.5
one_shot = true
autostart = true

[node name="Gun" type="Position2D" parent="."]
position = Vector2( 24, 0 )

[node name="MoveTimer" type="Timer" parent="."]
wait_time = 5.0
one_shot = true

[node name="BulletContainer" type="Node" parent="."]

[node name="LifeBar" parent="." instance=ExtResource( 2 )]
              [gd_scene load_steps=4 format=2]

[ext_resource path="res://Bouncer.tscn" type="PackedScene" id=1]
[ext_resource path="res://Player.tscn" type="PackedScene" id=2]
[ext_resource path="res://Shuffler.tscn" type="PackedScene" id=3]

[node name="TestScene" type="Node2D"]

[node name="Player" parent="." instance=ExtResource( 2 )]
position = Vector2( 296, 736 )

[node name="Shuffler" parent="." instance=ExtResource( 3 )]
position = Vector2( 472, 56 )

[node name="Shuffler2" parent="." instance=ExtResource( 3 )]
position = Vector2( 200, 72 )

[node name="Shuffler3" parent="." instance=ExtResource( 3 )]
position = Vector2( 320, 224 )

[node name="Bouncer" parent="." instance=ExtResource( 1 )]
position = Vector2( 296, 480 )

[node name="Bouncer2" parent="." instance=ExtResource( 1 )]
position = Vector2( 120, 264 )

[node name="Bouncer3" parent="." instance=ExtResource( 1 )]
position = Vector2( 488, 256 )

[node name="Bouncer4" parent="." instance=ExtResource( 1 )]
position = Vector2( 328, 64 )
        [gd_resource type="Environment" load_steps=2 format=2]

[sub_resource type="ProceduralSky" id=1]

[resource]
background_mode = 2
background_sky = SubResource( 1 )
             GDST@   @           9  PNG �PNG

   IHDR   @   @   �iq�   sRGB ���  �IDATx�ݜytTU��?��WK*�=���%�  F����0N��݂:���Q�v��{�[�����E�ӋH���:���B�� YHB*d_*�jyo�(*M�JR!h��S�T��w�߻���ro���� N�\���D�*]��c����z��D�R�[�
5Jg��9E�|JxF׵'�a���Q���BH�~���!����w�A�b
C1�dB�.-�#��ihn�����u��B��1YSB<%�������dA�����C�$+(�����]�BR���Qsu][`
�DV����у�1�G���j�G͕IY! L1�]��� +FS�IY!IP ��|�}��*A��H��R�tQq����D`TW���p\3���M���,�fQ����d��h�m7r�U��f������.��ik�>O�;��xm��'j�u�(o}�����Q�S�-��cBc��d��rI�Ϛ�$I|]�ơ�vJkZ�9>��f����@EuC�~�2�ym�ش��U�\�KAZ4��b�4������;�X婐����@Hg@���o��W�b�x�)����3]j_��V;K����7�u����;o�������;=|��Ŗ}5��0q�$�!?��9�|�5tv�C�sHPTX@t����w�nw��۝�8�=s�p��I}�DZ-̝�ǆ�'�;=����R�PR�ۥu���u��ǻC�sH`��>�p�P ���O3R�������۝�SZ7 �p��o�P!�
��� �l��ހmT�Ƴێ�gA��gm�j����iG���B� ܦ(��cX�}4ۻB��ao��"����� ����G�7���H���æ;,NW?��[��`�r~��w�kl�d4�������YT7�P��5lF�BEc��=<�����?�:]�������G�Μ�{������n�v��%���7�eoݪ��
�QX¬)�JKb����W�[�G ��P$��k�Y:;�����{���a��&�eפ�����O�5,;����yx�b>=fc�* �z��{�fr��7��p���Ôִ�P����t^�]͑�~zs.�3����4��<IG�w�e��e��ih�/ˆ�9�H��f�?����O��.O��;!��]���x�-$E�a1ɜ�u�+7Ȃ�w�md��5���C.��\��X��1?�Nغ/�� ��~��<:k?8��X���!���[���꩓��g��:��E����>��꩓�u��A���	iI4���^v:�^l/;MC��	iI��TM-$�X�;iLH���;iI1�Zm7����P~��G�&g�|BfqV#�M������%��TM��mB�/�)����f����~3m`��������m�Ȉ�Ƽq!cr�pc�8fd���Mۨkl�}P�Л�汻��3p�̤H�>+���1D��i�aۡz�
������Z�Lz|8��.ִQ��v@�1%&���͏�������m���KH�� �p8H�4�9����/*)�aa��g�r�w��F36���(���7�fw����P��&�c����{﹏E7-f�M�).���9��$F�f r �9'1��s2).��G��{���?,�
�G��p�µ�QU�UO�����>��/�g���,�M��5�ʖ�e˃�d����/�M`�=�y=�����f�ӫQU�k'��E�F�+ =΂���
l�&���%%�������F#KY����O7>��;w���l6***B�g)�#W�/�k2�������TJ�'����=!Q@mKYYYdg��$Ib��E�j6�U�,Z�鼌Uvv6YYYԶ��}( ���ߠ#x~�s,X0�����rY��yz�	|r�6l����cN��5ϑ��KBB���5ϡ#xq�7�`=4A�o�xds)�~wO�z�^��m���n�Ds�������e|�0�u��k�ٱ:��RN��w�/!�^�<�ͣ�K1d�F����:�������ˣ����%U�Ą������l{�y����)<�G�y�`}�t��y!��O@� A� Y��sv:K�J��ՎۣQ�܃��T6y�ǯ�Zi
��<�F��1>�	c#�Ǉ��i�L��D�� �u�awe1�e&')�_�Ǝ^V�i߀4�$G�:��r��>h�hݝ������t;)�� &�@zl�Ұր��V6�T�+����0q��L���[t���N&e��Z��ˆ/����(�i啝'i�R�����?:
P].L��S��E�݅�Á�.a6�WjY$F�9P�«����V^7���1Ȓ� �b6�(����0"�k�;�@MC���N�]7 �)Q|s����QfdI���5 ��.f��#1���G���z���>)�N�>�L0T�ۘ5}��Y[�W뿼mj���n���S?�v��ْ|.FE"=�ߑ��q����������p����3�¬8�T�GZ���4ݪ�0�L�Y��jRH��.X�&�v����#�t��7y_#�[�o��V�O����^�����paV�&J�V+V��QY����f+m��(�?/������{�X��:�!:5�G�x���I����HG�%�/�LZ\8/����yLf�Æ>�X�Єǣq���$E������E�Ǣ�����gێ��s�rxO��x孏Q]n���LH����98�i�0==���O$5��o^����>6�a� �*�)?^Ca��yv&���%�5>�n�bŜL:��y�w���/��o�褨A���y,[|=1�VZ�U>,?͑���w��u5d�#�K�b�D�&�:�����l~�S\���[CrTV�$����y��;#�������6�y��3ݸ5��.�V��K���{�,-ւ� k1aB���x���	LL� ����ңl۱������!U��0L�ϴ��O\t$Yi�D�Dm��]|�m���M�3���bT�
�N_����~uiIc��M�DZI���Wgkn����C��!xSv�Pt�F��kڨ��������OKh��L����Z&ip��
ޅ���U�C�[�6��p���;uW8<n'n��nͽQ�
�gԞ�+Z	���{���G�Ĭ� �t�]�p;躆 ��.�ۣ�������^��n�ut�L �W��+ ���hO��^�w�\i� ��:9>3�=��So�2v���U1z��.�^�ߋěN���,���� �f��V�    IEND�B`�           [remap]

importer="texture"
type="StreamTexture"
path="res://.import/icon.png-487276ed1e3a0c39cad0279d744ee560.stex"
metadata={
"vram_texture": false
}

[deps]

source_file="res://icon.png"
dest_files=[ "res://.import/icon.png-487276ed1e3a0c39cad0279d744ee560.stex" ]

[params]

compress/mode=0
compress/lossy_quality=0.7
compress/hdr_mode=0
compress/bptc_ldr=0
compress/normal_map=0
flags/repeat=0
flags/filter=true
flags/mipmaps=false
flags/anisotropic=false
flags/srgb=2
process/fix_alpha_border=true
process/premult_alpha=false
process/HDR_as_SRGB=false
process/invert_color=false
stream=false
size_limit=0
detect_3d=true
svg/scale=1.0
[remap]

path="res://Bouncer.gdc"
              [remap]

path="res://Bullet.gdc"
               [remap]

path="res://Global.gdc"
               [remap]

path="res://Junk.gdc"
 [remap]

path="res://JunkShip.gdc"
             [remap]

path="res://LifeBar.gdc"
              [remap]

path="res://Player.gdc"
               [remap]

path="res://PlayerBullet.gdc"
         [remap]

path="res://ShooterJunk.gdc"
          [remap]

path="res://ShooterJunkShip.gdc"
      [remap]

path="res://Shuffler.gdc"
             �PNG

   IHDR   @   @   �iq�   sRGB ���  �IDATx��ytTU��?�ի%���@ȞY1JZ �iA�i�[P��e��c;�.`Ow+4�>�(}z�EF�Dm�:�h��IHHB�BR!{%�Zߛ?��	U�T�
���:��]~�������-�	Ì�{q*�h$e-
�)��'�d�b(��.�B�6��J�ĩ=;���Cv�j��E~Z��+��CQ�AA�����;�.�	�^P	���ARkUjQ�b�,#;�8�6��P~,� �0�h%*QzE� �"��T��
�=1p:lX�Pd�Y���(:g����kZx ��A���띊3G�Di� !�6����A҆ @�$JkD�$��/�nYE��< Q���<]V�5O!���>2<��f��8�I��8��f:a�|+�/�l9�DEp�-�t]9)C�o��M~�k��tw�r������w��|r�Ξ�	�S�)^� ��c�eg$�vE17ϟ�(�|���Ѧ*����
����^���uD�̴D����h�����R��O�bv�Y����j^�SN֝
������PP���������Y>����&�P��.3+�$��ݷ�����{n����_5c�99�fbסF&�k�mv���bN�T���F���A�9�
(.�'*"��[��c�{ԛmNު8���3�~V� az
�沵�f�sD��&+[���ke3o>r��������T�]����* ���f�~nX�Ȉ���w+�G���F�,U�� D�Դ0赍�!�B�q�c�(
ܱ��f�yT�:��1�� +����C|��-�T��D�M��\|�K�j��<yJ, ����n��1.FZ�d$I0݀8]��Jn_� ���j~����ցV���������1@M�)`F�BM����^x�>
����`��I�˿��wΛ	����W[�����v��E�����u��~��{R�(����3���������y����C��!��nHe�T�Z�����K�P`ǁF´�nH啝���=>id,�>�GW-糓F������m<P8�{o[D����w�Q��=N}�!+�����-�<{[���������w�u�L�����4�����Uc�s��F�륟��c�g�u�s��N��lu���}ן($D��ת8m�Q�V	l�;��(��ڌ���k�
s\��JDIͦOzp��مh����T���IDI���W�Iǧ�X���g��O��a�\:���>����g���%|����i)	�v��]u.�^�:Gk��i)	>��T@k{'	=�������@a�$zZ�;}�󩀒��T�6�Xq&1aWO�,&L�cřT�4P���g[�
p�2��~;� ��Ҭ�29�xri� ��?��)��_��@s[��^�ܴhnɝ4&'
��NanZ4��^Js[ǘ��2���x?Oܷ�$��3�$r����Q��1@�����~��Y�Qܑ�Hjl(}�v�4vSr�iT�1���f������(���A�ᥕ�$� X,�3'�0s����×ƺk~2~'�[�ё�&F�8{2O�y�n�-`^/FPB�?.�N�AO]]�� �n]β[�SR�kN%;>�k��5������]8������=p����Ցh������`}�
�J�8-��ʺ����� �fl˫[8�?E9q�2&������p��<�r�8x� [^݂��2�X��z�V+7N����V@j�A����hl��/+/'5�3�?;9
�(�Ef'Gyҍ���̣�h4RSS� ����������j�Z��jI��x��dE-y�a�X�/�����:��� +k�� �"˖/���+`��],[��UVV4u��P �˻�AA`��)*ZB\\��9lܸ�]{N��礑]6�Hnnqqq-a��Qxy�7�`=8A�Sm&�Q�����u�0hsPz����yJt�[�>�/ޫ�il�����.��ǳ���9��
_
��<s���wT�S������;F����-{k�����T�Z^���z�!t�۰؝^�^*���؝c
���;��7]h^
��PA��+@��gA*+�K��ˌ�)S�1��(Ե��ǯ�h����õ�M�`��p�cC�T")�z�j�w��V��@��D��N�^M\����m�zY��C�Ҙ�I����N�Ϭ��{�9�)����o���C���h�����ʆ.��׏(�ҫ���@�Tf%yZt���wg�4s�]f�q뗣�ǆi�l�⵲3t��I���O��v;Z�g��l��l��kAJѩU^wj�(��������{���)�9�T���KrE�V!�D���aw���x[�I��tZ�0Y �%E�͹���n�G�P�"5FӨ��M�K�!>R���$�.x����h=gϝ�K&@-F��=}�=�����5���s �CFwa���8��u?_����D#���x:R!5&��_�]���*�O��;�)Ȉ�@�g�����ou�Q�v���J�G�6�P�������7��-���	պ^#�C�S��[]3��1���IY��.Ȉ!6\K�:��?9�Ev��S]�l;��?/� ��5�p�X��f�1�;5�S�ye��Ƅ���,Da�>�� O.�AJL(���pL�C5ij޿hBƾ���ڎ�)s��9$D�p���I��e�,ə�+;?�t��v�p�-��&����	V���x���yuo-G&8->�xt�t������Rv��Y�4ZnT�4P]�HA�4�a�T�ǅ1`u\�,���hZ����S������o翿���{�릨ZRq��Y��fat�[����[z9��4�U�V��Anb$Kg������]������8�M0(WeU�H�\n_��¹�C�F�F�}����8d�N��.��]���u�,%Z�F-���E�'����q�L�\������=H�W'�L{�BP0Z���Y�̞���DE��I�N7���c��S���7�Xm�/`�	�+`����X_��KI��^��F\�aD�����~�+M����ㅤ��	SY��/�.�`���:�9Q�c �38K�j�0Y�D�8����W;ܲ�pTt��6P,� Nǵ��Æ�:(���&�N�/ X��i%�?�_P	�n�F�.^�G�E���鬫>?���"@v�2���A~�aԹ_[P, n��N������_rƢ��    IEND�B`�       ECFG      _global_script_classes�                    class         Bullet        language      GDScript      path      res://Bullet.gd       base      KinematicBody2D             class         Junk      language      GDScript      path      res://Junk.gd         base      KinematicBody2D             class         JunkShip      language      GDScript      path      res://JunkShip.gd         base      KinematicBody2D    _global_script_class_iconsL               JunkShip             Junk             Bullet            application/config/name         Project4   application/run/main_scene         res://TestScene.tscn   application/config/icon         res://icon.png     autoload/Global         *res://Global.gd   display/window/size/width      X     display/window/size/height            input/ui_left               deadzone      ?      events              InputEventKey         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           pressed           scancode        unicode           echo          script            InputEventJoypadButton        resource_local_to_scene           resource_name             device            button_index         pressure          pressed           script            InputEventJoypadMotion        resource_local_to_scene           resource_name             device            axis       
   axis_value       ��   script            InputEventKey         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           pressed           scancode   A      unicode           echo          script         input/ui_right               deadzone      ?      events              InputEventKey         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           pressed           scancode        unicode           echo          script            InputEventJoypadButton        resource_local_to_scene           resource_name             device            button_index         pressure          pressed           script            InputEventJoypadMotion        resource_local_to_scene           resource_name             device            axis       
   axis_value       �?   script            InputEventKey         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           pressed           scancode   D      unicode           echo          script         input/ui_up               deadzone      ?      events              InputEventKey         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           pressed           scancode        unicode           echo          script            InputEventJoypadButton        resource_local_to_scene           resource_name             device            button_index         pressure          pressed           script            InputEventJoypadMotion        resource_local_to_scene           resource_name             device            axis      
   axis_value       ��   script            InputEventKey         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           pressed           scancode   W      unicode           echo          script         input/ui_down               deadzone      ?      events              InputEventKey         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           pressed           scancode        unicode           echo          script            InputEventJoypadButton        resource_local_to_scene           resource_name             device            button_index         pressure          pressed           script            InputEventJoypadMotion        resource_local_to_scene           resource_name             device            axis      
   axis_value       �?   script            InputEventKey         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           pressed           scancode   S      unicode           echo          script         input/rotate_left(              deadzone      ?      events              InputEventKey         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           pressed           scancode   Z      unicode           echo          script            InputEventJoypadButton        resource_local_to_scene           resource_name             device            button_index         pressure          pressed           script         input/rotate_right(              deadzone      ?      events              InputEventKey         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           pressed           scancode   X      unicode           echo          script            InputEventJoypadButton        resource_local_to_scene           resource_name             device            button_index         pressure          pressed           script         input/shoot�              deadzone      ?      events              InputEventKey         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           pressed           scancode          unicode           echo          script            InputEventJoypadButton        resource_local_to_scene           resource_name             device            button_index          pressure          pressed           script            InputEventMouseButton         resource_local_to_scene           resource_name             device            alt           shift             control           meta          command           button_mask           position              global_position               factor       �?   button_index         pressed           doubleclick           script         layer_names/2d_physics/layer_1         Player     layer_names/2d_physics/layer_2         Player Bullets     layer_names/2d_physics/layer_3         Enemies    layer_names/2d_physics/layer_4         Enemy Bullets      layer_names/2d_physics/layer_5         Junk   layer_names/2d_physics/layer_6         Player Junk $   rendering/quality/driver/driver_name         GLES2   )   rendering/environment/default_environment          res://default_env.tres  