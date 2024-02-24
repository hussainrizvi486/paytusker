# Generated by Django 4.2.3 on 2024-01-10 22:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0015_alter_order_grand_total_alter_order_order_status_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartitem',
            name='qty',
            field=models.DecimalField(decimal_places=2, default=1, max_digits=12),
        ),
        migrations.AlterField(
            model_name='order',
            name='order_status',
            field=models.CharField(blank=True, choices=[('004', 'Shipping'), ('002', 'Order Confirmed'), ('003', 'In Process'), ('005', 'Delivered'), ('001', 'Order Pending')], max_length=999, null=True),
        ),
    ]
