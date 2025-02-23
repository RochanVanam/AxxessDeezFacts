import torch
import torch.nn as nn
from torchvision import models
from model.process_images import test_loader

# Load trained model
model = models.resnet18(pretrained=False)
num_ftrs = model.fc.in_features

# model.fc = torch.nn.Linear(num_ftrs, 2)
model.fc = nn.Sequential(
    nn.Linear(num_ftrs, 512),
    nn.ReLU(),
    nn.Dropout(0.5),
    nn.Linear(512, 2)
)

model.load_state_dict(torch.load("resnet18_model.pth"))
model.eval()

# Set device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

# Evaluate model
correct = 0
total = 0

with torch.no_grad():
    for images, labels in test_loader:
        images, labels = images.to(device), labels.to(device)
        outputs = model(images)
        _, predicted = outputs.max(1)
        correct += (predicted == labels).sum().item()
        total += labels.size(0)

test_acc = 100 * correct / total
print(f"Test Accuracy: {test_acc:.2f}%")
