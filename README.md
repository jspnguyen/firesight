# Firesight

<div align="center">
  <img src="assets/firesight_banner.png" alt="Firesight Logo" width="500"/>
</div>

## Summary
A dashboard built to assist regional governments in monitoring and allocating proper resources in order to efficiently address wildfires. We utilize public data on demographics, weather, fire history, access to technology, language, income, evacuation ability (car access), water access, broadband access, and emergency service staffing to create a comprehensive visualization. We also utilize AI agents to assist in suggesting changes or modifications to existing systems to improve the efficiency of wildfire response.

## Features
- Real-time wildfire monitoring and visualization
- Demographic data analysis
- Resource allocation recommendations
- AI-powered insights for emergency response
- Comprehensive data integration from multiple sources
- Interactive dashboard interface

## How to Install

### Prerequisites
- Python 3.8 or higher
- Node.js 14 or higher
- Git

### Backend Setup
1. Clone the repository:
```bash
git clone https://github.com/yourusername/firesight.git
cd firesight
```

2. Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd front
```

2. Install dependencies:
```bash
npm install
```

## How to Use

### Starting the Backend
1. Activate your virtual environment if not already activated:
```bash
source venv/bin/activate  # On Windows, use: venv\Scripts\activate
```

2. Start the FastAPI server:
```bash
cd backend
uvicorn main:app --reload
```

### Starting the Frontend
1. In a new terminal, navigate to the frontend directory:
```bash
cd front
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:3000`

## Project Structure
```
firesight/
├── backend/         # FastAPI backend server
├── front/          # Frontend application
├── data/           # Data storage and processing
├── assets/         # Static assets and images
├── requirements.txt # Python dependencies
└── README.md       # Project documentation
```

## Sources
### Census Data
- [Los Angeles](https://labormarketinfo.edd.ca.gov/file/Census2022/LAdp2022.pdf)
- [Monterey](https://labormarketinfo.edd.ca.gov/file/Census2022/montedp2022.pdf)
- [Yolo](https://labormarketinfo.edd.ca.gov/file/Census2022/yolodp2022.pdf)
- [Shasta](https://labormarketinfo.edd.ca.gov/file/Census2022/shastdp2022.pdf)

### Fire Districts
- [Los Angeles](https://geohub.lacity.org/datasets/691409b93f8d4d9e81f9a593c53ed069_3/explore?location=34.018933%2C-118.412043%2C9.93)
- [Monterey](https://montereycountyopendata-12017-01-13t232948815z-montereyco.opendata.arcgis.com/datasets/MontereyCo::fire-protection-districts-1/explore)
- [Yolo](https://data.sacog.org/datasets/865c671f824b46548332ade360077141_1/about)
- [Shasta](https://data-shasta.opendata.arcgis.com/datasets/a3af0c1268ca41ed86af626e0a22effb_7/explore?location=40.738145%2C-122.164438%2C9.42)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
