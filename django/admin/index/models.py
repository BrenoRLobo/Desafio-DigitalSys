from django.core.validators import validate_email
from django.db import models

class DadosPessoais(models.Model):
    nome = models.CharField(max_length=50)
    dataNascimento = models.DateField()
    def __str__(self):
        return self.nome

class Contato(models.Model):
    dadosPessoais = models.ForeignKey(DadosPessoais, on_delete=models.CASCADE, related_name='contato')
    email = models.EmailField()
    telefone = models.CharField(max_length=12)
    endereco = models.CharField(max_length=100)
    def __str__(self):
        return self.email
    

class Experiencia(models.Model):
    dadosPessoais = models.ForeignKey(DadosPessoais, on_delete=models.CASCADE, related_name='experiencia')
    cargo = models.CharField(max_length=50)
    empresa =models.CharField(max_length=50)
    periodo = models.CharField(max_length=50)
    descricao = models.TextField(max_length=200)
    

    def __str__(self):
        return self.empresa

class Formacao(models.Model):
    dadosPessoais = models.ForeignKey(DadosPessoais, on_delete=models.CASCADE, related_name='instituicao')
    instituicao = models.CharField(max_length=50)
    curso = models.CharField(max_length=50)
    periodo = models.CharField(max_length=50)
    def __str__(self):
        return self.instituicao