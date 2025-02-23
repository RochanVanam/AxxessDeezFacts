from openai import OpenAI as openai

YOUR_API_KEY = ""

# Example medical record in JSON format
medical_record = {
    "Patient Identification Information": {
        "Full Name": "John A. Doe",
        "Date of Birth": "March 15, 1985",
        "Gender": "Male",
        "Contact Information": {
            "Address": "1234 Elm Street, Austin, TX 78701",
            "Phone": "(512) 555-6789",
            "Email": "john.doe@example.com"
        }
    },
    "Medical History": {
        "Past Conditions": ["Hypertension (diagnosed in 2015)", "Type 2 Diabetes (diagnosed in 2018)"],
        "Allergies": ["Penicillin", "peanuts"],
        "Surgical History": ["Appendectomy (2003)"],
        "Family History": {
            "Father": "Heart disease (deceased at age 65)",
            "Mother": "Type 2 Diabetes"
        }
    },
    "Medication Information": {
        "Current Medications": ["Metformin (500 mg, twice daily)", "Lisinopril (10 mg, once daily)"],
        "Past Medications": []
    },
    "Treatment History": {
        "Chief Complaint": "Fatigue and shortness of breath during physical activity.",
        "History of Present Illness": (
            "Symptoms began two months ago and have progressively worsened. "
            "No associated chest pain or dizziness."
        )
    },
    "Diagnostic Records": {
        "Lab Results (February 15, 2025)": {
            "Hemoglobin A1c": "7.2% (elevated)",
            "Fasting Blood Glucose": "140 mg/dL (elevated)"
        },
        "Imaging Reports": {"Chest X-Ray": "Normal findings."}
    },
    "Nursing Records": {
        "Vital Signs (February 22, 2025)": {
            "Blood Pressure": "140/90 mmHg",
            "Heart Rate": "85 bpm",
            "Respiratory Rate": "18 breaths/minute",
            "Temperature": "98.6°F"
        }
    },
    "Operative and Anesthesiology Reports": {
        "Details": None
    },
    "Discharge Summary": {
        "Date of Discharge": "February 20, 2025",
        "Details": (
            "Discharged after routine check-up and lab tests. Advised to follow up in four weeks for diabetes "
            "management review and further cardiovascular evaluation."
        )
    },
    "Behavioral and Mental Health Records": {
        "History of Mental Health Conditions": None
    },
    "Radiology/Diagnostic Imaging Reports": {
        "Chest X-Ray Report (February 15, 2025)": (
            "No abnormalities detected in lungs or heart size."
        )
    },
    "Pathology Reports": {
        None: None
    },
    "Immunization Records": {
        "Influenza Vaccine": {"Administered Date": "October 2024"},
        "COVID-19 Booster Vaccine": {"Administered Date": "December 2024"}
    }
}

health_plan = {
    "Personalized Recommendations": {
        "Medication Reminders": {
            "Metformin": {
                "Dosage": "500 mg, twice daily",
                "Instructions": "Take one tablet with breakfast and one with dinner to help control blood sugar levels.",
                "Reminder": "Ensure meals are consistent in carbohydrate content to avoid blood sugar fluctuations."
            },
            "Lisinopril": {
                "Dosage": "10 mg, once daily",
                "Instructions": "Take one tablet in the morning with water to manage blood pressure.",
                "Reminder": "Monitor blood pressure weekly and report any unusual symptoms like dizziness or swelling."
            },
            "General Tip": "Use a medication reminder app or set alarms on your phone to ensure adherence."
        },
        "Exercise Recommendations": {
            "Aerobic Exercise": {
                "Type": ["Brisk walking", "Cycling", "Swimming"],
                "Duration": "30 minutes, 5 days a week",
                "Instructions": "Start with low intensity and gradually increase as tolerated."
            },
            "Strength Training": {
                "Type": ["Bodyweight squats", "Light dumbbell lifts"],
                "Frequency": "2 times per week",
                "Benefits": "Improves muscle strength and insulin sensitivity."
            },
            "Stretching/Yoga": {
                "Duration": "10–15 minutes daily",
                "Benefits": ["Reduces stress", "Improves flexibility"]
            },
            "Caution": [
                "Avoid overexertion.",
                "Stop exercising if you experience shortness of breath or chest discomfort.",
                "Consult your physician if symptoms occur."
            ]
        },
        "Personalized Diet Plan": {
            "Daily Nutritional Goals": {
                "Carbohydrates": {
                    "Type": ["Complex carbs with a low glycemic index"],
                    "Examples": ["Whole grains", "Legumes"]
                },
                "Proteins": {
                    "Type": ["Lean proteins"],
                    "Examples": ["Chicken breast", "Fish", "Tofu"]
                },
                "Fats": {
                    "Type": ["Healthy fats"],
                    "Examples": ["Olive oil", "Avocado", "Nuts"]
                },
                "Fiber Goal (Daily)": {
                    "Amount (grams)": 25,
                    "Sources": ["Vegetables", "Fruits", "Whole grains"]
                },
                "Sodium Limit (Daily)": "<1500 mg"
            },
                        "Sample Meal Plan": {
                "Breakfast": [
                    "Scrambled eggs with spinach and whole-grain toast.",
                    "One small apple or orange."
                ],
                "Snack": [
                    "A handful of unsalted almonds or walnuts."
                ],
                "Lunch": [
                    "Grilled chicken salad with mixed greens, cucumbers, cherry tomatoes, olive oil, and balsamic vinegar dressing.",
                    "Quinoa or brown rice (½ cup)."
                ],
                "Snack": [
                    "Low-fat Greek yogurt with a sprinkle of chia seeds."
                ],
                "Dinner": [
                    "Baked salmon with steamed broccoli and sweet potato (½ cup)."
                ],
                "Dessert (Optional)": [
                    "Fresh berries (½ cup) or a small piece of dark chocolate (70% cocoa)."
                ]
            },
            "Additional Tips": {
                "Hydration": "Drink at least 8–10 glasses of water daily.",
                "Avoid": [
                    "Sugary drinks.",
                    "Processed foods high in trans fats or refined carbs."
                ],
                "Monitoring": [
                    "Monitor blood sugar levels before and after meals to identify triggers."
                ]
            }
        },
        "Follow-Up Recommendations": {
            "Appointments": [
                "Schedule a follow-up appointment in four weeks for diabetes management review and cardiovascular evaluation as advised in the discharge summary."
            ],
            "Dietitian Consultation": [
                "Consider consulting a registered dietitian for more personalized meal planning."
            ],
            "Health Tracking": [
                "Track progress using a health journal or app to record blood pressure, glucose levels, exercise routines, and dietary intake."
            ]
        }
    }
}

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
    "Treatment History": {
        "Chief Complaint": "Intermittent wheezing and chest tightness, especially during exercise.",
        "History of Present Illness": (
            "Symptoms have been present for the past three weeks and are triggered by physical activity. "
            "No associated fever or persistent cough."
        )
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


# Messages including the medical record
messages = [
    {
        "role": "system",
        "content": (
            f"You are an artificial intelligence assistant which is supposed to detect early-stage diseases, conditions, and health issues. Given an individual's medical record, you are supposed to generate health plan which consists of personalized medication recommendations/reminders, exercise, and diet. Here is an example medical record for context: {medical_record}. Here is an example health plan: {health_plan}"
        ),
    },
    {
        "role": "user",
        "content": (
            f"Here is my medical record: {myMedicalRecord}"
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