import torch
import torch.nn as nn
from torchvision import transforms
from PIL import Image
from torchvision import models

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

model.load_state_dict(torch.load("model/resnet18_model.pth"))
model.eval()

# Set device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

# Define image preprocessing
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.5], std=[0.5])
])

# Load and preprocess image
def predict_image(image_path):
    image = Image.open(image_path).convert("RGB")
    image = transform(image).unsqueeze(0).to(device)  # Add batch dimension
    
    with torch.no_grad():
        output = model(image)
        _, predicted = output.max(1)
        class_names = ["Normal", "Stone"]
        return class_names[predicted.item()]

# Example usage
image_path = "test.jpg"
prediction = predict_image(image_path)
print(f"Prediction: {prediction}")
