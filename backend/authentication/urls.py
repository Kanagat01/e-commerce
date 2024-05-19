from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from .views import *


urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('token/', MyTokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('token/verify/', TokenVerifyView.as_view()),
    path('get_user_profile/', GetUserProfile.as_view()),
]
