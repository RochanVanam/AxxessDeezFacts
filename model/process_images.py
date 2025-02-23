import os
import torch
from torch.utils.data import DataLoader, random_split
from torchvision import datasets, transforms
from sklearn.model_selection import train_test_split
from torch import nn, optim
import matplotlib.pyplot as plt

# Path to the dataset
dataset_path = 'dataset/'

# Set image size and batch size
image_size = (224, 224)  # Resize images to 224x224
batch_size = 32

# Define the transformation pipeline
transform = transforms.Compose([
    transforms.Resize(image_size),          # Resize images
    # transforms.RandomHorizontalFlip(),      # Randomly flip images
    # transforms.RandomRotation(20),          # Randomly rotate images
    # transforms.RandomZoom(0.2),             # Randomly zoom images
    transforms.RandomRotation(degrees=15),  # Rotate up to 15 degrees
    transforms.ColorJitter(brightness=0.2, contrast=0.2),  # Adjust brightness/contrast
    transforms.RandomAffine(degrees=0, translate=(0.1, 0.1)),
    transforms.ToTensor(),                  # Convert to tensor
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])  # Normalize
])

# Load the dataset using ImageFolder
dataset = datasets.ImageFolder(root=dataset_path, transform=transform)

# Split dataset into training and test sets (80-20 split)
train_size = int(0.8 * len(dataset))
test_size = len(dataset) - train_size

train_dataset, test_dataset = random_split(dataset, [train_size, test_size])

# Create data loaders
train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False)

# Check class names and the number of samples
print(f'Classes: {dataset.classes}')
print(f'Number of samples in training set: {len(train_dataset)}')
print(f'Number of samples in test set: {len(test_dataset)}')

# Sample image from the training set to check transformations
def show_sample_image():
    sample_image, sample_label = train_dataset[0]
    plt.imshow(sample_image.permute(1, 2, 0))
    plt.title(dataset.classes[sample_label])
    plt.show()

# show_sample_image()

