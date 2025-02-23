# import model.process_images
# import model.train
import model.test

if __name__ == "__main__":
    # print("Preprocessing data...")
    # model.process_images  # Loads data

    # print("\nTraining model...")
    # model.train  # Trains model

    print("\nTesting model...")
    model.test  # Evaluates model

    print("\nSetup complete! Use `inference.py` for new predictions.")
