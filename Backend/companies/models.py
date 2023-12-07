from django.db import models 

from django_tenants.models import TenantMixin, DomainMixin 

class Client(TenantMixin): 
    name = models.CharField(max_length=100) 
    responsable = models.CharField(max_length=100, null=True, blank=True) 
    email = models.CharField(max_length=100, null=True, blank=True) 
    phone = models.CharField(max_length=100, null=True, blank=True) 
    address = models.CharField(max_length=100, null=True, blank=True) 
    city = models.CharField(max_length=100, null=True, blank=True) 
    created_on = models.DateField(auto_now_add=True) 
    updated_on = models.DateField(auto_now=True) 
    paid_until = models.DateField(null=True, blank=True) 
    on_trial = models.BooleanField(default=True) 
    active = models.BooleanField(default=True) 
    trial_period_days = models.IntegerField(default=30) 

class Domain(DomainMixin): 
    pass