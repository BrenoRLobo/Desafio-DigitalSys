from django.contrib import admin
from .models import DadosPessoais, Contato, Experiencia, Formacao


@admin.register(DadosPessoais)
class adminDadosPessoais(admin.ModelAdmin):
    list_display = ('nome','dataNascimento')
    
@admin.register(Contato)
class adminContato(admin.ModelAdmin):
    list_display = ('email','telefone','endereco')

@admin.register(Experiencia)
class adminExperiencia(admin.ModelAdmin):
    list_display = ('cargo','empresa','periodo','descricao')

@admin.register(Formacao)
class adminFormacao(admin.ModelAdmin):
    list_display = ('instituicao','curso','periodo')