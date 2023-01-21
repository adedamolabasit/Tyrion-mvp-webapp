from django.urls import path
from .views import *



urlpatterns =[
    path('',getRoutes,name="routes"),
    path('users/profile/',getUserProfile,name="user-profile"),
    path('users/',getUsers,name="users"),
    path('products/',getProducts,name="products"),
    path('products/<str:pk>/',getProduct,name="product"),
    path('users/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/',registerUser,name="register")
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] 