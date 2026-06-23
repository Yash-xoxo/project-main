export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  longDescription: string;
  category: string;
  techStack: string[];
  highlights: string[];
  metrics: Array<{ label: string; value: string }>;
  keyFeatures: string[];
  architecture: string;
  challenges: string[];
  learnings: string[];
  role: string;
  images?: string[];
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "proxmox-infrastructure",
    title: "Proxmox Virtualization Infrastructure",
    subtitle: "One machine. Production-grade everything.",
    shortDescription:
      "Self-hosted private cloud running a complete startup stack from a single bare-metal machine — live at yashx.space",
    description:
      "A private virtualization lab built to behave exactly like a real production environment — hosting every service, app, and API live at yashx.space with zero cloud dependency",
    longDescription:
      "Built a fully self-hosted private cloud on a single physical machine that powers every service, frontend, backend, database, and API running at yashx.space — all in production, with zero cloud dependency and zero monthly infrastructure cost. The stack runs 25+ isolated virtual machines and LXC containers using Proxmox as a Type-1 hypervisor, with KVM/QEMU handling full VMs and LXC managing lightweight service containers. All public traffic is securely tunneled through Cloudflare Tunnels, eliminating the need for a static IP, open inbound ports, or any cloud-hosted compute. ZFS handles 10TB of storage with built-in redundancy, snapshotting, and instant rollback. This is a complete, startup-viable infrastructure stack operating at production reliability — from a single laptop.",
    category: "Infrastructure",
    techStack: [
      "Proxmox",
      "KVM/QEMU",
      "Cloudflare Tunnels",
      "LXC",
      "Debian",
      "ZFS",
      "Virtual Networking",
    ],
    highlights: [
      "Type-1 hypervisor running 25+ VMs and containers on bare-metal hardware",
      "Zero open inbound ports — all public access secured via Cloudflare Tunnels",
      "Complete per-service isolation with dedicated virtual networking and storage datasets",
      "ZFS snapshot-based backup with instant point-in-time rollback capability",
      "Separate dev, staging, and production environments coexisting on one physical host",
      "Fully reproducible and version-controlled infrastructure deployment workflows",
      "Hosts the entire yashx.space stack — frontend, backend, databases, and APIs — live",
    ],
    metrics: [
      { label: "Isolated VMs & Containers", value: "25+" },
      { label: "Production Uptime", value: "99.9%" },
      { label: "ZFS-Managed Storage", value: "10TB" },
      { label: "Monthly Cloud Cost", value: "$0" },
    ],
    keyFeatures: [
      "VM and LXC container provisioning via Proxmox API with automated post-install configuration scripts",
      "Cloudflare Tunnel integration providing zero-trust, portless public access to every hosted service",
      "ZFS storage pool with ARC cache tuning, per-dataset compression, and automated snapshot scheduling",
      "Complete self-hosted stack: Nginx reverse proxy, React frontends, Node.js APIs, PostgreSQL, and MongoDB",
      "VLAN-segmented virtual networking isolating traffic between dev, staging, and production environments",
      "LXC containers enabling instant-start, low-overhead service isolation alongside full KVM virtual machines",
      "Single-machine architecture that replaces $500–$2000/month of equivalent cloud infrastructure cost",
    ],
    architecture:
      "A Type-1 hypervisor stack built on Proxmox, running KVM/QEMU for full virtual machines and LXC for lightweight, instant-start service containers. ZFS manages all 10TB of storage with built-in RAID-like redundancy, ARC read caching, and per-dataset point-in-time snapshot rollback. Each service runs inside its own isolated VM or container with a dedicated virtual network interface and storage dataset. Cloudflare Tunnels establish outbound-only encrypted connections from the host to Cloudflare's global edge network — exposing every service at yashx.space without opening a single inbound port or requiring a static public IP address. The entire stack, from DNS routing and TLS termination to container lifecycle management, is automated, documented, and fully reproducible from a single host configuration.",
    challenges: [
      "Resource contention across 25+ simultaneous workloads — solved with Proxmox cgroup-based CPU pinning, memory ballooning, and I/O priority scheduling to guarantee stable performance per VM and container without over-provisioning",
      "Secure public access without a static IP or open inbound ports — solved by integrating Cloudflare Tunnels, routing all traffic outbound through Cloudflare's edge with full TLS termination, DDoS mitigation, and zero attack surface on the host",
      "Storage throughput degradation under concurrent VM disk I/O — solved by tuning ZFS ARC cache allocation, separating hot and cold workloads onto SSD-backed and HDD-backed vdevs respectively, and matching dataset record sizes to each workload's I/O pattern",
      "Network isolation between development, staging, and production environments on shared hardware — solved using Proxmox Linux bridges with VLAN tagging and per-environment firewall rules enforced at the hypervisor level, not the OS level",
    ],
    learnings: [
      "Enterprise hypervisor management: cgroup-level resource scheduling, CPU pinning, memory ballooning, and workload isolation on bare metal without cloud abstractions",
      "Zero-trust public networking: using Cloudflare Tunnels to expose services globally with no open inbound ports, no static IP, and full TLS handled at the edge",
      "ZFS storage architecture: ARC cache tuning, per-dataset compression and record sizing, automated snapshot scheduling, and ZFS send/receive for off-site replication",
      "Startup-grade infrastructure ownership: complete responsibility from physical hardware through hypervisor, networking, DNS, TLS, and application-level deployment",
      "High-availability design applied to single-node bare metal: redundancy strategies, snapshot-based disaster recovery, and instant rollback under real failure conditions",
    ],
    role: "Infrastructure Architect & Self-Hosted Systems Engineer",
    images: [],
    demoUrl: "https://proxmox.yashx.space",
  },
  {
    id: "2",
    slug: "n8n-workflow-engine",
    title: "n8n-Driven AI Workflow Engine",
    subtitle: "Where raw inputs become readable intelligence.",
    shortDescription:
      "Autonomous AI-powered pipeline that aggregates data from 15+ sources, summarizes it with LLMs, and publishes across channels — 200+ updates per day, fully automated",
    description:
      "An autonomous information processing system that turns scattered multi-source data streams into structured, LLM-summarized intelligence delivered on a schedule — no human input required",
    longDescription:
      "Built a fully autonomous news and insights pipeline that continuously collects raw data from APIs, Telegram channels, Discord servers, and RSS feeds — then processes everything through n8n automation workflows and LLM-powered summarization to produce clean, readable intelligence published automatically across multiple channels on a fixed schedule. The system eliminates manual research, aggregation, and distribution entirely. It handles 200+ updates per day across 15+ active sources, passes each item through deduplication and relevance filtering before any LLM call, generates contextual summaries using per-source prompt templates, and delivers structured content without a single human touchpoint. This is a production-grade automation stack that demonstrates how large language models integrate into real operational pipelines — not as a chatbot, but as a processing engine inside a larger system.",
    category: "Automation",
    techStack: ["n8n", "LLM", "APIs", "Telegram", "Discord", "RSS", "Node.js"],
    highlights: [
      "Fully autonomous multi-source data collection across APIs, Telegram, Discord, and RSS feeds",
      "LLM summarization pipeline with per-source contextual prompt engineering for accurate output",
      "Content deduplication using SHA-256 fingerprinting before any LLM processing occurs",
      "Cron-scheduled n8n workflows with error boundaries and automatic retry on failure",
      "Multi-channel automated publishing to Telegram, Discord, and HTTP web endpoints",
      "Processes 200+ updates per day with consistent sub-5-second per-item latency",
    ],
    metrics: [
      { label: "Updates Processed/Day", value: "200+" },
      { label: "Active Data Sources", value: "15+" },
      { label: "Per-Item Processing Time", value: "<5s" },
    ],
    keyFeatures: [
      "Multi-source data collection: REST API polling, Telegram Bot API listeners, Discord webhook receivers, and RSS feed parsers — all feeding a unified normalization stage",
      "Per-source LLM summarization with contextual prompt templates engineered to extract relevant signal from each source type",
      "SHA-256 content fingerprinting deduplication engine preventing repeated items from re-entering the pipeline and consuming LLM tokens",
      "Cron-scheduled n8n workflows with configurable trigger intervals, per-stage error boundaries, and exponential backoff retry on transient failures",
      "Multi-channel automated publishing: structured posts to Telegram channels, Discord servers, and web API endpoints on a fixed schedule",
      "Per-provider rate limit management with request queuing and backoff strategies to stay within API quota windows without dropping items",
      "Modular workflow graph design in n8n — new sources and output channels can be added independently without disrupting existing pipeline flows",
    ],
    architecture:
      "n8n serves as the core orchestration engine, managing a directed graph of automation workflows triggered on cron schedules. Each source type has a dedicated collection workflow — API polling nodes, Telegram listener bots, Discord webhook ingestion, and RSS parsers — all feeding into a shared normalization pipeline that maps each source's format into a consistent internal schema. Normalized items are checked against a deduplication cache using content fingerprints, then batched and submitted to an LLM API with source-specific prompt templates. Summarized output is routed to publishing workflows targeting each configured output channel. Every stage includes structured error handling, logging, and retry logic — the pipeline continues processing other items even when individual nodes fail.",
    challenges: [
      "Rate limiting across 15+ API providers with different quota windows and enforcement behaviors — solved with per-source rate limit tracking nodes in n8n, exponential backoff on 429 responses, and a request queue that paces calls within each provider's allowed throughput",
      "Content deduplication when the same story appears across multiple sources within the same collection window — solved with SHA-256 content fingerprinting checked against a short-lived seen-items cache before any item enters the LLM processing stage",
      "LLM context window overflow when source articles exceed token limits — solved by adding a pre-processing step that extracts lead paragraphs and key sentences using a lightweight heuristic before constructing the summarization prompt",
      "Pipeline throughput bottlenecks when processing 200+ daily items through sequential LLM calls — solved by parallelizing collection workflows across sources and using n8n's batch execution mode to run multiple LLM summarization calls concurrently within provider rate limits",
    ],
    learnings: [
      "n8n workflow orchestration: designing reliable, modular automation graphs with reusable sub-workflows, error handling nodes, and cron-based scheduling for production pipelines",
      "Multi-source data normalization: mapping disparate API response schemas, Telegram message formats, Discord payloads, and RSS structures into a unified internal data model",
      "LLM prompt engineering for production pipelines: contextual framing per source type, output length control, and structuring prompts to produce consistent machine-parseable summaries",
      "Event-driven and schedule-driven architecture: building autonomous systems that operate continuously without human supervision using cron triggers and reactive error recovery",
      "Practical API integration at scale: managing authentication, rate limiting, payload validation, and resilient polling across 15+ external providers simultaneously",
    ],
    role: "Automation Engineer & AI Pipeline Developer",
    images: [],
    demoUrl: "https://n8n.yashx.space",
  },
  {
    id: "3",
    slug: "travel-platform",
    title: "Containerized Full-Stack Travel Platform",
    subtitle: "A booking experience that feels invisible to the user.",
    shortDescription:
      "Fully containerized travel booking ecosystem with a React frontend, Node.js microservices, MongoDB, and Docker Compose orchestration",
    description:
      "A modular, containerized full-stack booking platform where every service runs in isolation but delivers a unified, seamless experience to the end user",
    longDescription:
      "Designed and built a fully containerized travel booking platform that separates concerns cleanly across microservices while presenting a single, seamless experience to the end user. The system combines a React frontend, multiple Node.js and Express backend services, MongoDB for persistent data storage, and Docker Compose for reproducible local and production-equivalent orchestration. The platform supports a complete end-to-end booking flow — from user registration and JWT authentication through booking creation, modification, retrieval, and cancellation — across 6 coordinated containers managed by a single Compose file. Every service is independently deployable, environment-agnostic through externalized configuration, and connected through a clearly defined REST API contract. This project demonstrates full-stack ownership from database schema design and REST API structure through containerization strategy and user-facing interface.",
    category: "Full-Stack",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Docker Compose", "Microservices"],
    highlights: [
      "Modular microservice architecture with 6 independently managed and deployable containers",
      "React SPA frontend communicating with Express REST backends over a versioned API contract",
      "MongoDB persistence with Mongoose schema validation, indexing, and structured data modeling",
      "Docker Compose orchestration enabling a one-command deployment across any environment",
      "JWT-based authentication issued by a dedicated auth service and verified across all backends",
      "Sub-200ms API response time maintained across all booking operations under normal load",
    ],
    metrics: [
      { label: "REST API Endpoints", value: "25+" },
      { label: "API Response Time", value: "<200ms" },
      { label: "Containerized Services", value: "6" },
    ],
    keyFeatures: [
      "JWT authentication flow: a dedicated auth service issues tokens verified by shared middleware across all backend services without inter-service calls at request time",
      "Full booking lifecycle: create, read, update, and cancel operations with real-time availability validation before confirming any reservation",
      "Service isolation — auth, bookings, users, and search each run in their own container with no shared process space or filesystem",
      "Docker Compose orchestration with startup health checks, dependency ordering, and named volumes for stateful MongoDB data persistence",
      "MongoDB data modeling using Mongoose schemas with field-level validation, compound indexes on frequent query patterns, and embedded document design for booking details",
      "RESTful API design with consistent resource naming, HTTP status code usage, and structured error response payloads across all services",
      "Nginx reverse proxy container routing external traffic to each backend service by URL path prefix, serving the React SPA for all other routes",
    ],
    architecture:
      "A microservice-style architecture orchestrated with Docker Compose. The React frontend is built into a static bundle served by an Nginx container that also acts as the API gateway, routing requests to the correct Express backend service based on URL path prefix. Authentication is handled by a dedicated auth service that issues signed JWTs; all other services verify these tokens using a shared middleware module without needing to call the auth service on each request. MongoDB runs as its own container with a named Docker volume for durable data persistence. All services communicate over a Docker internal bridge network, completely isolated from external access except through the Nginx entrypoint. Compose manages container startup order, inter-service dependency resolution, and environment variable injection for each service.",
    challenges: [
      "Managing container startup dependency ordering when backend services needed the MongoDB container ready before accepting connections — solved using Docker Compose healthcheck-based depends_on conditions that wait for MongoDB to confirm readiness before starting dependent services",
      "Maintaining booking availability consistency when concurrent users attempt to reserve the same slot — solved with atomic MongoDB findOneAndUpdate operations using optimistic concurrency checks that reject conflicting writes at the database level",
      "Sharing JWT verification logic across multiple independent backend services without duplicating code — solved by extracting the middleware into an internal shared module mounted as a volume in each service container during development and baked into each image at build time for production",
      "Achieving environment-portable deployments that behave identically across developer machines and production without hardcoded configuration — solved by fully externalizing all service URLs, database credentials, and JWT secrets to environment variables injected by Docker Compose from a single .env file",
    ],
    learnings: [
      "Microservices architecture: defining service boundaries, designing inter-service communication patterns, and managing shared authentication context across independent processes",
      "Docker and Docker Compose: multi-container orchestration, startup sequencing with health checks, named volume management for persistence, and environment-variable-driven configuration",
      "Full-stack application design: database schema modeling, REST API contract design, and connecting backend data flows to React state management and UI rendering",
      "Service-oriented computing: building systems where each service has a single, well-defined responsibility, a clear external interface, and no hidden coupling to other services",
    ],
    role: "Full-Stack Engineer & DevOps Lead",
    images: [],
    demoUrl: "https://container.yashx.space",
  },
  {
    id: "4",
    slug: "kubernetes-cluster",
    title: "Kubernetes Auto-Scaling Web Cluster",
    subtitle: "Engineered for the edge of production load.",
    shortDescription:
      "Self-healing, load-adaptive Kubernetes web cluster with Horizontal Pod Autoscaling that responds to traffic spikes in under 30 seconds",
    description:
      "A production-grade Kubernetes cluster that automatically scales web workloads in response to real traffic metrics — no manual intervention, no downtime, no over-provisioning",
    longDescription:
      "Built a production-simulating Kubernetes cluster that demonstrates self-healing infrastructure and intelligent, metric-driven horizontal scaling from end to end. Using Kubernetes, Horizontal Pod Autoscaler, Minikube, Docker, and Apache HTTPD, the cluster detects traffic-driven CPU spikes and automatically provisions additional pod replicas within 30 seconds — scaling back down when load subsides to conserve resources. This project represents cloud-native systems thinking applied completely: declarative infrastructure definitions, automated operations that replace human intervention, and a system designed to manage its own health under real workload conditions. Every component — from liveness probes and readiness checks to resource requests and HPA thresholds — is configured to mirror how production Kubernetes environments behave when serving real traffic at scale.",
    category: "Cloud-Native",
    techStack: ["Kubernetes", "HPA", "Minikube", "Docker", "Apache HTTPD", "Helm"],
    highlights: [
      "Horizontal Pod Autoscaler scaling replicas dynamically based on live CPU and request-per-second metrics",
      "Self-healing pod management — the cluster detects and replaces failed pods automatically with no downtime",
      "NodePort and ClusterIP service routing distributing traffic across all healthy replicas simultaneously",
      "CPU resource requests and limits configured per pod for accurate HPA metric collection and scheduling",
      "Liveness and readiness probes per container ensuring traffic is never sent to an unhealthy pod",
      "99.95% uptime maintained across sustained high-traffic load simulation scenarios",
    ],
    metrics: [
      { label: "Cluster Nodes", value: "3+" },
      { label: "Auto-Scale Response Time", value: "<30s" },
      { label: "Measured Uptime", value: "99.95%" },
    ],
    keyFeatures: [
      "Horizontal Pod Autoscaler configured with CPU utilization thresholds defining minimum and maximum replica bounds for automatic scale-out and scale-in",
      "Self-healing Deployment controller — Kubernetes continuously reconciles actual pod state with the declared desired state and replaces failed pods within seconds",
      "Apache HTTPD web server containerized as a Docker image with a custom configuration, serving as the scalable workload under test",
      "ClusterIP internal service load-balancing traffic evenly across all healthy pod replicas, exposed externally via a NodePort service",
      "CPU resource requests and limits declared per pod to enable the Metrics Server to collect accurate per-pod utilization data for HPA decisions",
      "Liveness probes detecting hung or crashed containers and triggering automatic restarts; readiness probes preventing traffic routing to pods still initializing",
      "Minikube-based local multi-node cluster providing full Kubernetes feature parity including HPA, Metrics Server, and rolling updates without any cloud provider",
      "Controlled load simulation using scripted concurrent HTTP request bursts to validate autoscaling behavior at defined traffic ramp rates",
    ],
    architecture:
      "A multi-node Kubernetes cluster managed through Minikube, running Apache HTTPD web servers packaged as Docker container images. A Deployment controller manages the pod lifecycle, maintaining a declared replica count while Kubernetes continuously reconciles the running state against the desired state. The Horizontal Pod Autoscaler watches per-pod CPU utilization metrics collected by the Metrics Server and automatically adjusts the active replica count within configured minimum and maximum bounds whenever utilization exceeds or drops below defined thresholds. A ClusterIP Service load-balances inbound HTTP traffic across all currently healthy and ready pod replicas, exposed externally through a NodePort binding. Liveness and readiness probes run continuously per container — liveness triggers a pod restart on failure, readiness gates traffic routing until the pod signals it is fully initialized.",
    challenges: [
      "HPA metric collection latency causing slow reaction times to real traffic spikes — solved by tuning the Metrics Server scrape interval and reducing the HPA sync period to improve responsiveness, then adjusting the scale-up stabilization window to prevent false-positive triggers from momentary CPU spikes",
      "Pod replica thrashing under oscillating load — rapidly scaling up and immediately scaling back down in repeated cycles — solved by configuring a scale-down stabilization period that requires sustained low CPU utilization before reducing replicas, preventing destructive rapid cycling",
      "Cluster scheduling inefficiency from over-allocated pod resource requests — solved by profiling actual Apache HTTPD CPU consumption under representative load and right-sizing resource requests to match observed utilization, allowing the scheduler to pack pods more efficiently across nodes",
      "Generating realistic high-traffic load patterns to validate HPA scaling behavior at meaningful thresholds — solved by scripting concurrent HTTP request generators with configurable concurrency levels and ramp rates to produce controlled, repeatable traffic scenarios that predictably trigger scaling events",
    ],
    learnings: [
      "Kubernetes orchestration fundamentals: Deployments, Services, ConfigMaps, the Kubernetes control loop, and declarative infrastructure management through manifests",
      "Auto-scaling policy design: HPA metric threshold selection, stabilization window configuration, scale-up and scale-down cooldown tuning to prevent thrashing under variable load",
      "Cloud-native architecture patterns: declarative desired-state infrastructure, self-healing systems, immutable container deployments, and rolling update strategies with zero downtime",
      "Production-grade systems design: liveness and readiness probe configuration, resource request and limit right-sizing, and designing systems that manage their own health without manual intervention",
    ],
    role: "Cloud Infrastructure Engineer & Kubernetes Specialist",
    images: [],
    demoUrl: "https://kubernetes.yashx.space",
  },
  {
    id: "5",
    slug: "cicd-pipeline",
    title: "CI/CD Pipeline for Python Microservices",
    subtitle: "Automation that turns code into deployable software.",
    shortDescription:
      "End-to-end Jenkins CI/CD pipeline with automated Pytest testing, Docker image builds, and production deployment for Python microservices — under 5 minutes, every push",
    description:
      "A production-style software delivery pipeline that automatically validates, packages, and deploys Python microservices on every code push — enforcing quality gates before any change reaches a runtime environment",
    longDescription:
      "Built a complete CI/CD pipeline for Python microservices that automates the entire software delivery lifecycle — from the moment a developer pushes code to GitHub, through automated Pytest test execution, Docker image builds, artifact registry storage, and deployment. Using Jenkins as the orchestration backbone, GitHub webhooks as the entry trigger, Docker for containerization and image management, and Pytest for automated testing, the pipeline enforces that every change passes defined quality gates before reaching any runtime environment. No deployment runs without passing tests. No image reaches production without a traceable Git commit SHA tag. The system achieves sub-5-minute end-to-end build times, enforces 85%+ test coverage as a hard pipeline gate, and maintains a 99.8% deployment success rate across all runs — demonstrating the delivery discipline and toolchain integration expected on professional engineering teams.",
    category: "DevOps",
    techStack: ["Jenkins", "GitHub", "Docker", "Pytest", "Python", "GitOps"],
    highlights: [
      "GitHub webhook triggers launch the full pipeline automatically on every push and pull request",
      "Pytest-driven unit and integration test execution enforced as a required gate before any build proceeds",
      "Docker images built and tagged with the Git commit SHA for full traceability between code and deployed artifact",
      "Multi-stage Jenkinsfile pipeline: test → build → push → deploy with isolated failure handling per stage",
      "85%+ test coverage enforced as a hard threshold — pipeline fails and blocks deployment on coverage drop",
      "99.8% deployment success rate across all pipeline executions in production use",
    ],
    metrics: [
      { label: "End-to-End Build Time", value: "<5min" },
      { label: "Test Coverage Enforced", value: "85%+" },
      { label: "Deployment Success Rate", value: "99.8%" },
    ],
    keyFeatures: [
      "GitHub webhook integration triggering a Jenkins pipeline run instantly on every push and pull request event, with branch-level pipeline configuration",
      "Automated Pytest execution covering unit and integration test suites with coverage measurement — pipeline fails and halts if coverage drops below the 85% threshold",
      "Docker image build stage producing commit-SHA-tagged images pushed to a container registry for full deployment lineage and rollback capability",
      "Declarative multi-stage Jenkinsfile stored in source control alongside application code — test, build, push, and deploy stages each run in isolation with independent failure handling",
      "Git commit SHA and semantic version tagging on every artifact providing complete traceability between any deployed container and the exact code it was built from",
      "Automated rollback mechanism — a failed post-deployment health check triggers an automatic revert to the previous known-good image tag without manual intervention",
      "Environment-specific pipeline branches: separate Jenkinsfile stages for staging validation and production promotion, with manual approval gates before production deployment",
    ],
    architecture:
      "Jenkins is the central orchestration engine, running a declarative Jenkinsfile pipeline defined in version control alongside the application code — treating pipeline configuration as code with the same review and history as the application itself. A GitHub webhook fires immediately on every push or pull request, triggering the Jenkins pipeline without polling delays. The pipeline executes across isolated stages: environment setup and dependency installation, Pytest test suite execution with coverage reporting, Docker image build using the application Dockerfile with BuildKit layer caching enabled, container registry push with commit-SHA and semantic version tags, and automated deployment to the target environment via a parameterized deployment script. Each stage runs as an isolated step — failure at any stage immediately halts the pipeline, records the failure with logs, and notifies the team without proceeding to downstream stages.",
    challenges: [
      "Intermittent test failures caused by non-deterministic test ordering and shared mutable state between test cases — solved by enforcing test isolation using pytest fixtures with function-scoped setup and teardown, and randomizing test execution order on every run to surface hidden inter-test dependencies before they reach production",
      "Docker build times exceeding the 5-minute target due to full dependency reinstallation on every pipeline run — solved by enabling BuildKit in the Jenkins Docker build step and restructuring Dockerfiles to maximize layer cache reuse by separating dependency installation from application code layers",
      "Artifact version collisions when multiple developers pushed branches simultaneously, producing ambiguous image tags — solved by using the full Git commit SHA as the primary image tag and implementing a Jenkins pipeline lock on the deployment stage to serialize concurrent deployment executions",
      "Deployment rollback reliability when a bad image passed tests but failed post-deployment health checks — solved by recording the previous deployment's image tag before every deploy and implementing an automated rollback step that triggers on health check failure, restoring the last known-good state without manual intervention",
    ],
    learnings: [
      "CI/CD pipeline design: multi-stage declarative Jenkinsfile authoring, pipeline-as-code practices, agent configuration, and designing failure-safe delivery workflows",
      "Automated testing strategy: test isolation with pytest fixtures, coverage enforcement as a pipeline gate, and integrating test results into delivery decisions",
      "Docker in CI: BuildKit layer caching strategies, commit-tagged image builds, container registry workflows, and artifact versioning for full deployment traceability",
      "DevOps toolchain integration: connecting GitHub, Jenkins, Docker, and deployment targets into a unified, automated delivery system that runs without human intervention on every code push",
    ],
    role: "DevOps Engineer & Release Automation Specialist",
    images: [],
    demoUrl: "https://pipline.yashx.space",
  },
  {
    id: "6",
    slug: "offline-ai-ecosystem",
    title: "Offline AI Model Ecosystem",
    subtitle: "Engineered for the edge, without the internet.",
    shortDescription:
      "Air-gapped local AI stack running 8+ LLMs and vision models with GPU-accelerated inference, zero cloud dependency, and an OpenAI-compatible API",
    description:
      "A fully offline, locally hosted AI development environment running large language models and vision models with hardware-accelerated GPU inference — no internet, no API costs, no data leaving the machine",
    longDescription:
      "Built a complete, air-gapped AI ecosystem capable of running large language models and vision models entirely offline — no internet required, no data leaving the machine, no per-query API cost. Using Ollama as the local model runtime, Open WebUI as the chat and management interface, and models including DeepSeek-R1, LLaMA 3.1, and Gemma sourced and version-managed through Hugging Face, the system delivers sub-100ms inference latency on 24GB+ of GPU VRAM. The stack supports both text and vision workloads, multi-model parallel execution with dynamic VRAM eviction, and exposes an OpenAI-compatible REST API that allows existing LLM client applications to switch to local inference with zero code changes. This project demonstrates the complete pipeline of local AI deployment: model acquisition, quantization tier selection based on VRAM constraints, hardware-accelerated inference configuration, and building usable interfaces on top — entirely self-contained, with no cloud dependency at any layer.",
    category: "AI/ML",
    techStack: [
      "Ollama",
      "Hugging Face",
      "Open WebUI",
      "DeepSeek",
      "LLaMA 3.1",
      "Gemma",
      "GPU",
    ],
    highlights: [
      "Fully air-gapped AI stack — all inference runs locally with zero internet access required at runtime",
      "8+ models deployed simultaneously including LLaMA 3.1, DeepSeek-R1, Gemma, and vision-capable models",
      "GPU-accelerated inference on 24GB+ VRAM delivering consistent sub-100ms response latency per token",
      "OpenAI-compatible /v1/chat/completions API endpoint enabling drop-in replacement for cloud LLM services",
      "Open WebUI providing a full-featured chat interface with model switching, conversation history, and system prompt configuration",
      "Multi-modal pipeline support combining text and vision models in unified prompt workflows",
    ],
    metrics: [
      { label: "Inference Latency", value: "<100ms" },
      { label: "Models Deployed", value: "8+" },
      { label: "GPU VRAM Available", value: "24GB+" },
    ],
    keyFeatures: [
      "Ollama runtime managing the complete model lifecycle: loading GGUF weights into GPU VRAM on first call, hot-keeping active models in memory, and evicting least-recently-used models under VRAM pressure",
      "Multi-model deployment across model families: LLaMA 3.1 for general instruction following, DeepSeek-R1 for reasoning-heavy tasks, Gemma for lightweight inference, and dedicated vision-capable models for image analysis",
      "GPU acceleration via CUDA with manual per-model VRAM budget allocation to enable stable concurrent model execution without out-of-memory failures",
      "Hugging Face integration for controlled model acquisition, version pinning, and GGUF quantization format selection based on VRAM availability and quality requirements",
      "Open WebUI providing conversation history, per-model system prompt management, parameter controls, and a model-selection interface over Ollama's API",
      "OpenAI-compatible REST API at /v1/chat/completions and /v1/models — existing applications using the OpenAI SDK connect to local inference by changing only the base URL",
      "Quantization selection workflow benchmarking Q4, Q5, and Q8 quantization formats per model family to find the optimal balance between VRAM footprint, inference speed, and output quality",
      "Vision model integration accepting base64-encoded image inputs in multimodal prompt payloads for diagram understanding, image description, and visual question answering",
    ],
    architecture:
      "Ollama acts as the core model runtime, managing the full lifecycle of every deployed model — loading GGUF-quantized weights from local disk into GPU VRAM on first request, maintaining recently used models in memory for low-latency follow-up calls, and evicting least-recently-used models when VRAM is needed for a new model load. Models are stored as GGUF quantized weight files on local disk, sourced and version-pinned through Hugging Face. Open WebUI connects to Ollama's local REST API, providing a complete interface layer that handles conversation persistence, multi-model selection, system prompt configuration, and parameter tuning without requiring any cloud connectivity. The full stack exposes an OpenAI-compatible API surface, making it a transparent drop-in replacement for OpenAI or Anthropic API calls in any application that uses a standard LLM client library. Vision models are loaded alongside language models and accept multimodal prompt payloads containing both text instructions and base64-encoded image data.",
    challenges: [
      "GPU VRAM exhaustion when loading multiple large models simultaneously — solved by implementing a per-model VRAM budget strategy, selecting appropriate quantization tiers (Q4/Q5/Q8) based on model size and task requirements, and tuning Ollama's keep_alive parameter to control how long idle models occupy VRAM before being evicted",
      "Inference quality degradation at aggressive quantization levels rendering certain models unusable for their intended tasks — solved by benchmarking each model at Q4, Q5, and Q8 quantization on a representative set of prompts, then selecting the highest quantization level that maintained acceptable coherence and factual accuracy for each specific use case",
      "Multi-modal prompt pipeline integration between text-only and vision-capable models when processing mixed inputs — solved by building a preprocessing layer that detects image inputs, encodes them to base64, structures the multimodal payload per Ollama's API schema, and routes the request automatically to the appropriate vision-capable model endpoint",
      "GPU thermal throttling reducing sustained inference throughput under continuous high-load usage — solved by profiling GPU temperature under sustained inference workloads and limiting concurrent model execution to keep thermals within safe bounds, maintaining consistent throughput rather than risking throttled performance degradation",
    ],
    learnings: [
      "Local LLM deployment: Ollama runtime configuration, GGUF model format internals, VRAM lifecycle management, and building reliable inference infrastructure on consumer hardware",
      "GPU computing and optimization: CUDA configuration for inference workloads, VRAM budget planning across multiple concurrent models, and thermal management under sustained GPU utilization",
      "Model quantization techniques: practical trade-offs between Q4, Q5, and Q8 GGUF quantization in terms of model size, inference speed, and output quality across different model families and task types",
      "Offline AI infrastructure design: building a complete, production-usable AI environment that operates entirely without cloud dependency — handling model acquisition, versioning, inference, and API exposure on private hardware",
    ],
    role: "AI/ML Engineer & Offline Infrastructure Specialist",
    images: [],
    demoUrl: "https://llm.yashx.space",
  },
];
