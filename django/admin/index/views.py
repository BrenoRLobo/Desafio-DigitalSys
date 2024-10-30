from django.shortcuts import render
from .models import DadosPessoais, Contato, Experiencia, Formacao
from .serializers import DadosPessoaisSerializer, ContatoSerializer, ExperienciaSerializer, FormacaoSerializer
from rest_framework import viewsets

class DadosPessoaisView(viewsets.ModelViewSet):
    queryset = DadosPessoais.objects.all()
    serializer_class = DadosPessoaisSerializer

class ContatoView(viewsets.ModelViewSet):
    queryset = Contato.objects.all()
    serializer_class = ContatoSerializer

class ExperienciaView(viewsets.ModelViewSet):
    queryset = Experiencia.objects.all()
    serializer_class = ExperienciaSerializer
class FormacaoView(viewsets.ModelViewSet):
    queryset = Formacao.objects.all()
    serializer_class = FormacaoSerializer

