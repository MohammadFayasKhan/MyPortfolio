# Mohammad Fayas Khan: Engineering Portfolio

Production personal developer portfolio and technical systems showcase for **Mohammad Fayas Khan**, AI Systems and Full-Stack Software Engineer pursuing a B.Tech in Computer Science and Engineering at Lovely Professional University (Current CGPA: 9.66 / 10, University Honor Roll 2025).

Repository: [https://github.com/MohammadFayasKhan/MyPortfolio](https://github.com/MohammadFayasKhan/MyPortfolio)

---

## Technical Overview

This portfolio is an interactive showcase of applied machine learning, edge robotics, autonomous browser agents, patent disclosures, empirical research, and full-stack software systems.

- **Kinetic Smooth Scrolling:** GSAP `ScrollSmoother` and `ScrollTrigger` integration with GPU acceleration, dual-canvas layout, and automatic kinetic pause during modal interaction.
- **Interactive Project Architecture Modals:** In-depth technical architecture overviews, gallery carousels with smooth auto-scroll, quantitative metrics, problem statements, and system flowcharts for all 6 featured projects.
- **Patent Disclosures & Research:** Direct inline access and verified PDF viewers for 2 filed Indian patent disclosures and 1 IEEE-format empirical software engineering research paper.
- **Dynamic iOS-Inspired Dock Navbar:** Floating bottom dock with Framer Motion spring magnification, internal icon hover labels, smooth section scrolling, and accessible theme switching.
- **Strict Quality Assurance:** Zero em dashes, zero en dashes, and zero pseudo-dashes across all source code, markdown content, and datasets.

---

## Featured Projects

1. **AI Powered Crop Intelligence Rover**
   - *Domain:* Field Robotics, Edge Machine Learning, and Precision Agriculture
   - *Stack:* Python, TensorRT, PyTorch, ROS2, ESP32, NVIDIA Jetson Nano, FastAPI
   - *Highlights:* 4WD rover with 4-DOF robotic arm, subpixel leaf damage segmentation, XiaoZhi AI voice assistance, and Indian patent filing. Top 30 finalist out of 900+ teams at LPU GearUp Season 5.

2. **LpuUmsAgent**
   - *Domain:* Autonomous Browser Agents and Workflow Automation
   - *Stack:* TypeScript, React 18, Chrome Extensions Manifest V3, Web Cryptography API
   - *Highlights:* Zero-cloud client-side browser companion automating attendance checks (<2s vs 45s), suppressing campus survey walls, and calculating duty leave margins.

3. **AttentionIsAllYouNeed**
   - *Domain:* Deep Learning Education and Interactive Visualization
   - *Stack:* Next.js 14, TypeScript, Tailwind CSS, KaTeX Math Engine, Canvas API
   - *Highlights:* Visualizer for Transformer architecture, multi-head attention heatmaps, and Query-Key-Value dot product matrix operations.

4. **CodeExplain**
   - *Domain:* Developer Tools and AI-Powered Code Analysis
   - *Stack:* Next.js, TypeScript, Tailwind CSS, FastAPI, Gemini API
   - *Highlights:* AI-powered code explanation platform providing plain-English breakdowns, algorithmic complexity analysis, and line-by-line pedagogical insights.

5. **EspBot**
   - *Domain:* Open-Source Robotics and Bare-Metal Embedded Systems
   - *Stack:* C, C++, ESP8266, WebSockets, HTML5 Canvas
   - *Highlights:* Open-source Wi-Fi robotic rover featuring sub-50ms latency joystick controls, bare-metal C++ firmware, and an onboard asynchronous HTTP server.

6. **SmartHomeAutomationSocket**
   - *Domain:* Edge IoT and Cloudless Smart Home Infrastructure
   - *Stack:* C, C++, ESP8266 NodeMCU, Apple HomeKit HAP, Siri
   - *Highlights:* Cloudless, zero-latency Apple HomeKit smart socket controlling AC appliances and USB power rails with zero third-party cloud dependence.

---

## Intellectual Property & Publications

### Patents Filed
- **AI Powered Crop Intelligence Rover** (Invention Disclosure Annexure 3b, Lovely Professional University, 2026)
- **Smart Precision Farming and Predictive Crop Advisory System** (Invention Disclosure Annexure 3b, Lovely Professional University, 2026)

### Research Paper
- **Remote Communication Challenges in Agile Software Teams: A Systematic Review of Socio-Technical Friction in Distributed Development** (IEEE Format, 25 Peer-Reviewed Citations, 2026)

---

## Tech Stack

- **Framework:** Next.js 14.2 (App Router, Static Site Generation)
- **Language:** TypeScript 5.8
- **Styling:** Tailwind CSS 3.4, PostCSS, CSS Variables
- **Motion & Smooth Scroll:** Framer Motion, GSAP 3.15 (ScrollSmoother, ScrollTrigger)
- **UI Components:** Radix UI primitives, Lucide Icons, Magic UI
- **Typography & Content:** Next.js Font Optimization, MDX, Rehype, Remark, Shiki

---

## Local Development

### Prerequisites
- Node.js (v18.17.0 or later recommended)
- npm (v9.0.0 or later)

### Installation

```bash
git clone https://github.com/MohammadFayasKhan/MyPortfolio.git
cd MyPortfolio
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Static Export

```bash
npm run build
npm run start
```

---

## Deployment Instructions

### Deploying to Vercel (Recommended)

1. Push this repository to GitHub: `https://github.com/MohammadFayasKhan/MyPortfolio.git`.
2. Navigate to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import the `MyPortfolio` repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
6. Click **Deploy**. Your portfolio will be live in under a minute with worldwide edge CDN caching.

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
