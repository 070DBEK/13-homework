# Generated by Django 5.1.3 on 2024-12-25 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Track',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('artist', models.CharField(max_length=255)),
                ('album', models.CharField(max_length=255)),
                ('genre', models.CharField(max_length=100)),
                ('release_date', models.DateField()),
                ('cover_image', models.ImageField(upload_to='cover_images/')),
                ('audio_file', models.FileField(upload_to='audio_files/')),
            ],
        ),
    ]
