from django.db import models

# Create your models here.
from django.db import models

# Create your models here.






class Images(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=2000)
    image = models.ImageField(upload_to='images/', blank=True)

    @classmethod
    def save_image(self):
        self.save()

    @classmethod
    def delete_image(self):
        self.delete()

    @classmethod
    def get_image_by_id(cls, image_id):
        image = cls.objects.get(id=image_id)
        return image

    def __str__(self):
        return self.name
