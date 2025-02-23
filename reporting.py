from openai import OpenAI as openai

YOUR_API_KEY = ""

myMedicalRecord = {
    "Patient Identification Information": {
        "Full Name": "Jane B. Smith",
        "Date of Birth": "July 22, 1990",
        "Gender": "Female",
        "Contact Information": {
            "Address": "5678 Maple Avenue, Dallas, TX 75201",
            "Phone": "(214) 555-1234",
            "Email": "jane.smith@example.com"
        }
    },
    "Medical History": {
        "Past Conditions": ["Asthma (diagnosed in 2005)", "Hyperlipidemia (diagnosed in 2020)"],
        "Allergies": ["Sulfa drugs", "shellfish"],
        "Surgical History": ["Tonsillectomy (2000)"],
        "Family History": {
            "Father": "Hypertension",
            "Mother": "Breast cancer (diagnosed at age 50)"
        }
    },
    "Medication Information": {
        "Current Medications": ["Albuterol inhaler (as needed)", "Atorvastatin (20 mg, once daily)"],
        "Past Medications": ["Montelukast (discontinued in 2018)"]
    },
    "Diagnostic Records": {
        "Lab Results (February 20, 2025)": {
            "Total Cholesterol": "220 mg/dL (elevated)",
            "LDL Cholesterol": "140 mg/dL (elevated)",
            "HDL Cholesterol": "50 mg/dL (normal)"
        },
        "Imaging Reports": {"Chest X-Ray": "No acute abnormalities."}
    },
    "Nursing Records": {
        "Vital Signs (February 22, 2025)": {
            "Blood Pressure": "130/85 mmHg",
            "Heart Rate": "78 bpm",
            "Respiratory Rate": "16 breaths/minute",
            "Temperature": "98.7°F"
        }
    },
    "Operative and Anesthesiology Reports": {
        "Details": None
    },
    "Discharge Summary": {
        "Date of Discharge": None,
        "Details": None
    },
    "Behavioral and Mental Health Records": {
        "History of Mental Health Conditions": ["Mild anxiety, managed without medication"]
    },
    "Radiology/Diagnostic Imaging Reports": {
        "Chest X-Ray Report (February 20, 2025)": (
            "No acute abnormalities detected. Mild hyperinflation consistent with asthma."
        )
    },
    "Pathology Reports": {
        None: None
    },
    "Immunization Records": {
        "Influenza Vaccine": {"Administered Date": None},
        "COVID-19 Booster Vaccine": {"Administered Date": None}
    }
}

stoned = True

inputSymptoms = input("How are you doing today? ")

# Messages including the medical record
messages = [
    {
        "role": "system",
        "content": (
            f"You are an artificial intelligence assistant which is supposed to perform symptom logging and feedback. Patients should be able to report any symptoms and feedback. The patient will also say whether or not they have kidney stones and you must take that info into account. Mention that you have looked at their records and it seems that they do/do not have kidney stones. Do not give sources (meaning don't put numbers like [1] or [5])"
        ),
    },
    {
        "role": "user",
        "content": (
            f"Here is how I'm feeling: {inputSymptoms}. Here is my medical record: {myMedicalRecord}. It is {stoned} that I have kidney stones."
        ),
    },
]

client = openai(api_key=YOUR_API_KEY, base_url="https://api.perplexity.ai")

# chat completion without streaming
response = client.chat.completions.create(
    model="sonar-pro",
    messages=messages
)
print(response.choices[0].message.content)
