---
sidebar_label: IBM watsonx
description: Configure IBM watsonx AI models in Roo Code. Access IBM's enterprise AI platform with support for both IBM Cloud and Cloud Pak for Data.
keywords:
  - ibm watsonx
  - watsonx
  - ibm ai
  - roo code
  - api provider
  - enterprise ai
  - cloud pak
  - ibm cloud
image: /img/social-share.jpg
---

# Using IBM watsonx With Roo Code

IBM watsonx is an enterprise AI and data platform designed to help businesses scale and accelerate AI adoption with trusted data. It provides access to IBM's foundation models and supports deployment on both IBM Cloud and Cloud Pak for Data.

**Website:** [https://www.ibm.com/watsonx](https://www.ibm.com/watsonx)

---

## Getting Started

IBM watsonx supports two deployment platforms:

- **IBM Cloud**: Cloud-based deployment with pay-as-you-go pricing
- **Cloud Pak for Data**: On-premises or private cloud deployment

### Free Trial Setup (IBM Cloud)

1. **Start Free Trial:** Visit [watsonx.ai registration](https://dataplatform.cloud.ibm.com/registration/stepone?context=wx)
2. **Sign Up:** Use Google authentication (recommended, not RedHat)
3. **Add Payment Info:** Add address and credit card information (no charges for trial)
4. **Create Runtime:** Create a watsonx.ai runtime resource (Dallas region recommended, select Lite plan)
5. **Launch watsonx:** Launch IBM watsonx and create a new project
6. **Get Credentials:**
   - Generate an API key from your IBM Cloud account
   - Note your project ID from the project settings

---

## Getting API Credentials

### For IBM Cloud Platform

1. **API Key:**

   - Go to [IBM Cloud API Keys](https://cloud.ibm.com/iam/apikeys)
   - Click "Create an IBM Cloud API key"
   - Give it a descriptive name (e.g., "Roo Code")
   - Copy and save the API key securely

2. **Project ID:**
   - Open your watsonx.ai project
   - Click on the project name in the top navigation
   - Go to "Manage" tab
   - Copy the "Project ID" value

### For Cloud Pak for Data Platform

1. **API Key or Username/Password:**

   - Contact your Cloud Pak administrator for authentication credentials
   - You'll need either an API key or username/password combination

2. **Instance URL:**
   - Get the base URL of your Cloud Pak for Data instance from your administrator
   - Format: `https://your-cpd-instance.com`

---

## Available Models

IBM watsonx provides access to various foundation models including:

- IBM Granite models
- Meta Llama models
- Other open-source and IBM models

For the complete list of available models and their capabilities, see [IBM watsonx.ai documentation](https://www.ibm.com/docs/en/watsonx-as-a-service).

---

## Configuration in Roo Code

### For IBM Cloud

1. **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2. **Select Provider:** Choose "IBM watsonx" from the "API Provider" dropdown.
3. **Select Platform:** Choose "IBM Cloud" from the "Platform" dropdown.
4. **Enter API Key:** Paste your IBM Cloud API key into the "API Key" field.
5. **Enter Project ID:** Paste your watsonx project ID into the "Project ID" field.
6. **Select Model:** Choose your desired model from the "Model" dropdown.

### For Cloud Pak for Data

1. **Open Roo Code Settings:** Click the gear icon (<Codicon name="gear" />) in the Roo Code panel.
2. **Select Provider:** Choose "IBM watsonx" from the "API Provider" dropdown.
3. **Select Platform:** Choose "Cloud Pak for Data" from the "Platform" dropdown.
4. **Enter Instance URL:** Enter your Cloud Pak for Data instance URL.
5. **Choose Authentication:**
   - **API Key:** Enter your Cloud Pak API key
   - **OR Username/Password:** Enter your credentials
6. **Enter Project ID or Space ID:** Provide your project or deployment space identifier.
7. **Select Model:** Choose your desired model from the "Model" dropdown.

---

## Tips and Notes

- **Enterprise Features:** IBM watsonx is designed for enterprise use with features like governance, compliance, and security controls.
- **Model Selection:** The available models depend on your watsonx plan and configuration. Some models may require additional setup or permissions.
- **Pricing:** For IBM Cloud, refer to the [IBM watsonx Pricing](https://www.ibm.com/products/watsonx-ai/pricing) page. For Cloud Pak, contact your IBM representative.
- **Documentation:** For detailed platform documentation, visit [IBM watsonx.ai docs](https://www.ibm.com/docs/en/watsonx-as-a-service).
- **Support:** Enterprise support is available through IBM. For trial accounts, use the [IBM Community forums](https://community.ibm.com/).

---

## Credits

IBM watsonx integration was contributed by [@PrasangAPrajapati](https://github.com/PrasangAPrajapati) in [PR #8321](https://github.com/RooCodeInc/Roo-Code/pull/8321) and continued in [PR #10167](https://github.com/RooCodeInc/Roo-Code/pull/10167).
