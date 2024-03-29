from rest_framework.serializers import ModelSerializer
from products.models import Product
from categories.api.serializers import CategorySerializer

class ProductSerializer(ModelSerializer):

    category_data = CategorySerializer(source='category', read_only=True)
    class Meta:
        model = Product
        fields = ['id', 'image', 'title', 'price', 'active', 'category', 'category_data']
        read_only_fields = ('id',) 