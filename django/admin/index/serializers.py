from rest_framework import serializers
from .models import DadosPessoais, Contato, Experiencia, Formacao

class DadosPessoaisSerializer(serializers.ModelSerializer):
    class Meta:
        model = DadosPessoais
        fields = '__all__'

class ContatoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contato
        fields = '__all__'

class ExperienciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experiencia
        fields = '__all__'

class FormacaoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Formacao
        fields = '__all__'