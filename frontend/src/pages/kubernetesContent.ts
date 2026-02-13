import type { LearnLanguage } from "@/data/mockData";

export const topicsOfKubernetes = [
  "Learning Objectives",

  "Container Orchestration",

  "Kubernetes Introduction",

  "Minikube Setup",

  "Kubernetes Architecture",
  "etcd",
  "API Server",
  "Scheduler",
  "Controller Manager",
  "Cloud Controller Manager",
  "Kubelet",
  "Kube Proxy (Component)",
  "Container Runtime",

  "Kubernetes Object Model",
  "Node",
  "Namespace",
  "Pod",
  "Label",
  "Label Selector",

  "ReplicationController",
  "ReplicaSet",
  "Deployment",
  "DaemonSet",

  "Service",
  "Service Discovery",
  "Service Type: ClusterIP",
  "Service Type: NodePort",
  "Service Type: LoadBalancer",
  "Service Type: ExternalName",
  "Service externalIPs",
  "Multi-Port Service",
  "Port Forwarding",
  "Traffic Policy",

  "Authentication",
  "Authorization",
  "RBAC",
  "ClusterRole & Binding",
  "Admission Control",

  "Volume",
  "CSI",
  "Volume Types",
  "PersistentVolume",
  "PersistentVolumeClaim",
  "hostPath Volume",

  "ConfigMap",
  "Secret",

  "Ingress",
  "Ingress Controller",

  "Annotation",
  "Resource Quota",
  "LimitRange",
  "Autoscaling",
  "Job",
  "CronJob",
  "StatefulSet",
  "Custom Resource",

  "Security Context",
  "Pod Security Admission",
  "Network Policy"
];

export const topicContentsOfKubernetes: {
  [key: string]: { title: string; content: string; code?: string; image?: string };
} = {

  "Learning Objectives": {
    title: "Learning Objectives",
    content: `This learning path is designed to help you understand Kubernetes as a system, not just as a set of commands.

The objective is to build strong fundamentals so that Kubernetes concepts feel connected instead of isolated. You should be able to understand why a feature exists, not just how to use it.

By the end of this journey, you should confidently reason about application deployment, scaling, networking, and security inside a Kubernetes cluster. You should also be able to read Kubernetes YAML files and understand what problem they are solving.

This is not about rushing through topics. It is about building intuition step by step so that Kubernetes feels predictable and logical.`,
    code: `
int learning_Should_be = 100;
int understanding_should_be = 100;
`
  },


  "Container Orchestration": {
    title: "Container Orchestration",
    content: `Running one container is simple. Running hundreds or thousands reliably is not.

As applications grew and traffic increased, teams needed a way to manage containers automatically. Containers crash, machines go down, traffic spikes unexpectedly, and manual intervention does not scale.

Container orchestration is the system that takes responsibility for these problems. It ensures containers are running, restarts them when they fail, places them on healthy machines, and keeps the application state aligned with what engineers declare.

Instead of managing containers directly, engineers describe what they want. The orchestrator continuously works in the background to make that desired state a reality. Kubernetes is the most popular container orchestrator because it does this reliably at scale.`,
    code: `
int desired_Containers = 10;
int running_Containers = 10;
`
  },
  "Kubernetes Introduction": {
    title: "Kubernetes Introduction",
    content: `Kubernetes is not a tool you use directly. It is a system that makes decisions for you.

At its core, Kubernetes is a distributed control system that manages applications running as containers. Instead of asking you to manually start, stop, and monitor containers, Kubernetes takes responsibility for maintaining the desired state of your application.

The key idea behind Kubernetes is declaration. You do not tell Kubernetes how to do things step by step. You tell it what you want, such as how many instances should run, how they should be exposed, and what resources they need. Kubernetes continuously compares the current state of the cluster with the desired state and takes action when they differ.

Kubernetes was designed for failure. Nodes can crash, containers can exit, networks can break, and traffic can spike without warning. Rather than treating failures as exceptions, Kubernetes assumes failures are normal and builds recovery directly into the system.

Another important aspect of Kubernetes is separation of concerns. Developers focus on application behavior. Kubernetes focuses on scheduling, scaling, networking, and self-healing. This separation allows teams to move faster without tightly coupling application logic to infrastructure logic.

Kubernetes also provides a consistent platform. Whether applications run on a laptop, a data center, or a cloud provider, the Kubernetes model remains the same. This consistency is one of the main reasons Kubernetes became the standard platform for running containerized workloads at scale.

Understanding Kubernetes means understanding that it is not just about containers. It is about control loops, reconciliation, and automation. Once this mental model is clear, every Kubernetes concept starts to fit naturally into place.`
  },

  "Minikube Setup": {
    title: "Minikube Setup",
    content: `Go through the provided instruction to install minikube and setup kubernetes cluster in your MAC OS
    for Linux and Windows we will provide installatio procedure soon.
    https://www.youtube.com/watch?v=AjJ96_w4Gw8`
  },
  "Kubernetes Architecture": {
    title: "Kubernetes Architecture",
    image: "/Image .png",
    content: `Kubernetes architecture is composed of a control plane and worker nodes.

The Control Plane manages the cluster (API Server, Scheduler, etcd, Controllers).
Worker Nodes run the applications (Kubelet, Kube Proxy, Container Runtime).

This architecture ensures high availability, scalability, and self-healing capabilities.`
  },
  "etcd": {
    title: "etcd",
    content: `Think of etcd as the brain of the Kubernetes cluster. It is the authoritative source of truth for the entire system.

Technically, etcd is a strongly consistent, distributed key-value store. It stores the configuration data, state, and metadata of the cluster.

Why is it special?
1. Consistency: In a distributed system, knowing "what is true" is hard. etcd uses the Raft consensus algorithm to ensure that if the cluster says a Pod exists, it really exists.
2. Watch Mechanism: Kubernetes components (like the Scheduler) don't poll etcd 100 times a second. Instead, they "watch" for changes. If you change a Deployment, etcd notifies the relevant controllers instantly.

Expert Note: etcd is the only stateful component in the Control Plane. The API Server is the only component that talks to etcd directly.`,
    code: `# Inspecting etcd data directly (debugging only)
# Usually strictly accessed via API Server

ETCDCTL_API=3 etcdctl get /registry/pods/default/my-pod

# Output key-value pair
/registry/pods/default/my-pod
{"kind":"Pod","apiVersion":"v1",...}`
  },
  "API Server": {
    title: "API Server",
    content: `The API Server (kube-apiserver) is the front door and the gatekeeper of the Kubernetes control plane.

Every request to the cluster—whether it comes from you typing \`kubectl\`, a dashboard, or a Kubelet on a worker node—must go through the API Server. It is the central hub of communication.

Core Responsibilities:
1. Authentication & Authorization: "Who are you?" (User/ServiceAccount) and "Are you allowed to do this?" (RBAC).
2. Validation: "Is this YAML valid?" Checks request against schema.
3. Gatekeeper: It is the only component that reads from or writes to etcd.
4. Lifecycle Management: It converts your request for a "Deployment" into the specific Pod definitions stored in the database.

The Flow:
When you run \`kubectl apply -f pod.yaml\`:
1. Request hits API Server.
2. API Server authenticates & validates you.
3. API Server writes the new state to etcd.
4. API Server says "Created" to you.
(The Pod starts later, asynchronously).`,
    code: `# See the API Server in action
kubectl get pods -v=6

# Output shows the HTTP request
GET https://127.0.0.1:6443/api/v1/namespaces/default/pods
200 OK in 152ms`
  },
  "Scheduler": {
    title: "Scheduler",
    content: `The Scheduler (kube-scheduler) is the matchmaker of the cluster. Its job is simple to describe but complex to execute: assign a new Pod to the best available Node.

When you create a Pod, it starts in a "Pending" state with no Node assigned. The Scheduler watches for these unassigned Pods and selects a Node for them.

How it decides:
1. Filtering (Predicates): "Which nodes are capable of running this Pod?" (CPU, RAM, Taints).
2. Scoring (Priorities): "Of the valid nodes, which one is the best?" (Image locality, load spreading).

Expert Note: The Scheduler does not run the Pod. It simply updates the Pod definition in the API Server to say: "NodeName: worker-1". The Kubelet on 'worker-1' sees this and starts the container.`,
    code: `# A Pod currently pending
apiVersion: v1
kind: Pod
metadata:
  name: pending-pod
spec:
  containers:
  - name: heavy-app
    image: my-app
    resources:
      requests:
        cpu: "100" # Scheduler waits for a node with 100 CPUs`
  },
  "Controller Manager": {
    title: "Controller Manager",
    content: `The Controller Manager (kube-controller-manager) is the tireless worker that ensures the desired state matches the current state.

It is a single binary that runs many distinct "controllers" (control loops) inside it.

The Control Loop Pattern:
1. Observe: Look at the current state.
2. Compare: Compare it to the desired state.
3. Act: Make changes to bring reality closer to the desire.

Examples:
- Node Controller: Marks nodes Offline if heartbeats fail.
- Replication Controller: Ensures you have exactly 3 replicas if you asked for 3.
- Service Account Controller: Creates default tokens.

This pattern makes Kubernetes "self-healing". It constantly fixes the drift between what you want and what exists.`,
    code: `# Conceptual Control Loop (Pseudocode)

for {
  desired := getDesiredState()
  current := getCurrentState()

  if current != desired {
    reconcile(current, desired)
  }

  sleep(5  time.Second)
}`
  },
  "Cloud Controller Manager": {
    title: "Cloud Controller Manager",
    content: `The Cloud Controller Manager (CCM) is the interface between your Kubernetes cluster and the Cloud Provider (AWS, GCP, Azure, etc.).

In early versions of Kubernetes, cloud-specific code (like "how to create an AWS LoadBalancer") was mixed into the main Kubernetes code. This was messy.
The CCM separates this logic. It allows the core Kubernetes control plane to evolve independently of the cloud providers.

Key Loops:
1. Node Controller: Checks the cloud API to see if a node has been deleted or needs initialization.
2. Route Controller: Configures routes in the underlying cloud infrastructure so that containers on different nodes can communicate.
3. Service Controller: Listens for Services of type \`LoadBalancer\` and asks the cloud provider to provision an external Load Balancer (ELB, GLB, etc.).

Why this matters: If you are running Kubernetes on bare metal (Minikube, On-Prem), you likely do not have a Cloud Controller Manager running. It is specific to cloud environments.`,
    code: `# Checking if CCM is running (on a cloud cluster)
kubectl get pods -n kube-system -l component=kube-controller-manager

# If you see aws-cloud-controller-manager, that is the implementation!`
  },
  "Kubelet": {
    title: "Kubelet",
    content: `The Kubelet is the Captain of the Node. It is the primary "node agent" that runs on every single node in the cluster.

Points to understand:
1. Registration: When a node starts up, the Kubelet introduces itself to the API Server: "Hello, I am a new node, and I have 4 CPUs and 8GB RAM."
2. Pod Execution: The API Server assigns a Pod to the node. The Kubelet sees this assignment, talks to the Container Runtime (Docker/containerd) via CRI (Container Runtime Interface), and says "Start these containers!"
3. Reporting: It constantly reports status back to the Control Plane. "Pod A is running," "Pod B crashed," "I am out of disk space."
4. Probes: The Kubelet is responsible for running Liveness and Readiness probes. If your app fails a liveness probe, the Kubelet kills it and restarts it.

Expert Note: The Kubelet does not manage containers itself. It manages the lifecycle of Pods by instructing the Container Runtime.`,
    code: `# Checking Kubelet status (systemd service)
systemctl status kubelet

# Kubelet config (usually found here)
cat /var/lib/kubelet/config.yaml`
  },
  "Kube Proxy (Component)": {
    title: "Kube Proxy",
    content: `Kube Proxy is the Network Manager running on each node. It is responsible for implementing the concept of a Kubernetes Service.

When you create a Service (like a ClusterIP), you get a stable virtual IP. But that IP doesn't technically exist on any network interface.
Kube Proxy makes it "real" by manipulating the node's network rules (iptables or IPVS).

How it works (iptables mode):
1. It watches the API Server for new Services and Endpoints.
2. When a Service is created, Kube Proxy writes iptables rules on the node.
3. These rules say: "If any traffic tries to go to ServiceIP:80, randomly redirect it to one of the PodIPs backing that service."

Expert Note: Despite the name "Proxy", modern Kube Proxy (iptables/IPVS mode) handles traffic with near-zero overhead because it happens at the kernel level. It doesn't actually proxy packets in userspace anymore (unless explicitly configured to legacy mode).`,
    code: `# Viewing the iptables rules created by Kube Proxy
# Warning: The output is huge!
sudo iptables -t nat -L KUBE-SERVICES

# You will see chains referencing your Service VIPs`
  },
  "Container Runtime": {
    title: "Container Runtime",
    content: `The Container Runtime is the software responsible for running containers.

Kubernetes itself does not know how to "create a container". It relies on a runtime to do the heavy lifting of interacting with the operating system (Linux cgroups and namespaces).

Evolution:
- Past: Docker was the default runtime (dockershim).
- Present: Kubernetes interacts with runtimes via CRI (Container Runtime Interface). The most common runtimes are containerd and CRI-O.

How it fits:
Kubelet -> (CRI) -> containerd -> (OCI) -> runc -> Kernel

Expert Note: Modern Kubernetes clusters rarely run "Docker" as the runtime. They run containerd. When you run \`docker build\`, you are dealing with a developer tool. When Kubernetes runs \`pod\`, it deals with the low-level runtime.`,
    code: `# Checking which runtime is being used by the node
kubectl get nodes -o wide

# Output column
CONTAINER-RUNTIME
containerd://1.6.20`
  },
  "Kubernetes Object Model": {
    title: "Kubernetes Object Model",
    content: `In Kubernetes, everything is an Object. A Pod is an object, a Service is an object, a ConfigMap is an object.

The Object Model is the standardized schema that defines how these entities are represented. Crucially, almost every Kubernetes object consists of two key fields:

1. \`spec\` (Specification): What you want the state to be. (e.g., "I want 3 replicas").
2. \`status\` (Status): What the state is right now. (e.g., "Currently running 1 replica").

The Great Reconciliation:
Kubernetes constantly acts to make \`status\` match \`spec\`.

Metadata:
All objects also have \`metadata\`, which includes:
- \`name\`: Unique identifier within a namespace.
- \`uid\`: Globally unique ID.
- \`labels\`: Key-value pairs for organization.
- \`annotations\`: Critical non-identifying metadata (like timestamps).`,
    code: `apiVersion: v1
kind: Pod
metadata:
  name: object-example
  labels:
    app: demo
spec:
  # This is the Desired State
  containers:
  - name: nginx
    image: nginx
status:
  # This is the Actual State (managed by K8s)
  phase: Running
  podIP: 10.244.0.5`
  },
  "Node": {
    title: "Node",
    content: `A Node is a worker machine in Kubernetes (formerly called a Minion). It can be a VM or a physical machine.

A Node provides the runtime environment for Pods. If a Pod is the application, the Node is the server it lives on.

Components on a Node:
1. Kubelet: Talks to the API Server.
2. Kube Proxy: Handles networking rules.
3. Container Runtime: Runs the containers.

Node Capacity:
Nodes have resources (CPU, Memory). If a Node runs out of resources, the Scheduler stops assigning new Pods to it. If it runs critically low (Pressure), the Kubelet may start killing non-critical Pods (Eviction).

Taints & Tolerations:
You can "taint" a node to repel Pods (e.g., "This node is for GPU workloads only"). Only Pods that "tolerate" that taint can schedule there.`,
    code: `# Get node details including capacity
kubectl describe node <node-name>

# Check for Taints
Taints: node-role.kubernetes.io/master:NoSchedule`
  },
  "Namespace": {
    title: "Namespace",
    content: `Namespaces are a way to divide cluster resources between multiple users over the same physical cluster.

Think of them as "Virtual Clusters" inside your physical cluster.

Why use them?
1. Isolation: Objects with the same name (e.g., "database") can exist in different namespaces without conflict.
2. Resource Management: You can assign Quotas (CPU/RAM limits) to a namespace to prevent a team from eating up the whole cluster.
3. Access Control: You can use RBAC to say "Team A has full access to Namespace A but no access to Namespace B".

Default Namespaces:
- "default": Where your stuff goes if you don't specify a namespace.
- "kube-system": Where Kubernetes components live (DO NOT TOUCH unless you know what you are doing).
- "kube-public": Readable by everyone (cluster-info).
- "kube-node-lease": Heartbeat data (advanced).`,
    code: `# Create a namespace
kubectl create namespace dev-team

# Run a pod inside that namespace
kubectl run nginx --image=nginx -n dev-team

# Switch your context so all commands target this namespace by default
kubectl config set-context --current --namespace=dev-team`
  },
  "Pod": {
    title: "Pod",
    content: `A Pod is the smallest, most basic deployable object in Kubernetes.

Key Concept: A Pod represents a single instance of a running process in your cluster.

It is NOT equivalent to a single container. A Pod is a "wrapper" that can hold one or more containers.
Think of it like "Peas in a Pod":
1. Shared Networking: All containers in a Pod share the same IP address and can talk to each other on localhost.
2. Shared Storage: Containers can mount the same Volumes to share data.

Ephemeral Nature:
Pods are designed to be ephemeral (temporary). They are not "pets" that you heal; they are "cattle" that you replace. If a Pod dies, you typically do not revive it; you create a new one to replace it.

Multi-Container Pods:
While most Pods run a single container, advanced patterns use "helper" containers (Sidecars, InitContainers) to assist the main application (e.g., a log-shipper sidecar or a database migration init-container).`,
    code: `apiVersion: v1
kind: Pod
metadata:
  name: nginx-production-pod
  labels:
    app: nginx-web-server
    environment: production
    tier: backend
spec:
  # The "spec" defines the containers to run
  containers:
  - name: nginx-container
    image: nginx:1.14.2  # Specific version for stability
    ports:
    - containerPort: 80
    
    # Resource requests ensure the scheduler finds a capable node
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m" # 1/4 of a CPU core
      limits:
        memory: "128Mi"
        cpu: "500m"

    # Liveness probe checks if the app is alive
    livenessProbe:
      httpGet:
        path: /
        port: 80
      initialDelaySeconds: 3
      periodSeconds: 3`
  },
  "Label": {
    title: "Label",
    content: `Labels are key/value pairs attached to objects (like Pods) used to organize and select subsets of objects.

They are the foundation of grouping in Kubernetes. Unlike "Names" (which are unique), Labels are shared.

Purpose:
1. Organization: Tagging objects with metadata that is meaningful to users (not implied by the system).
2. Loose Coupling: They allow you to map organizational structures (teams, release tracks) onto system objects without tight binding.

Examples of common labels:
- "release": "stable", "canary"
- "environment": "dev", "qa", "production"
- "tier": "frontend", "backend", "cache"
- "maintained_by": "team-x"

Note: Labels are not configuration. Changing a label does not change how the application runs, but it changes how the application is found/grouped.`,
    code: `apiVersion: v1
kind: Pod
metadata:
  name: labeled-pod
  labels:
    # Key: Value
    app: payment-processor
    version: v2.1
    region: us-east-1`
  },
  "Label Selector": {
    title: "Label Selector",
    content: `A Label Selector is the mechanism used by the system (and you) to search for and group resources based on their Labels.

It is the "Google Search" for your cluster objects.

Use Cases:
1. Services: A Service uses a selector to define "Which Pods should I send traffic to?". If a Pod has the label \`app=frontend\`, the Service picks it up.
2. ReplicaSets: "How many Pods do I own?". It counts Pods matching the selector.
3. Kubectl: "Show me only the production pods".

Types of Selectors:
1. Equality-based: \`environment = production\` (Strict match)
2. Set-based: \`environment in (production, qa)\` (Flexible match)

This mechanism allows for incredibly flexible deployments. You can simply add a label to a running Pod to add it to a Service's load balancing pool instantly.`,
    code: `# 1. Selecting via CLI
kubectl get pods -l environment=production,tier=frontend

# 2. Selecting via YAML (Service definition)
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    # This Service sends traffic to ANY Pod with these two labels
    app: nginx-web-server
    tier: backend
  ports:
    - protocol: TCP
      port: 80`
  },
  "ReplicationController": {
    title: "ReplicationController",
    content: `A ReplicationController (RC) is one of the oldest workload controllers in Kubernetes.

Its job is simple: Ensure a specified number of Pod replicas are running at any given time.

Mechanism:
- If there are too many pods: It kills the extras.
- If there are too few pods: It starts new ones.
- If a pod crashes/is deleted: It replaces it.

Status:
This object is largely deprecated and has been replaced by the ReplicaSet. You will rarely write an RC manifest in modern Kubernetes, but it's important to understand it as the ancestor of all replication logic.`,
    code: `apiVersion: v1
kind: ReplicationController
metadata:
  name: nginx-rc
spec:
  replicas: 3
  selector:
    app: nginx
  # The template for creating new pods
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx`
  },
  "ReplicaSet": {
    title: "ReplicaSet",
    content: `A ReplicaSet (RS) is the next-generation ReplicationController.

Major Difference:
The ReplicationController only supports "Equality-based" selectors (env = prod).
The ReplicaSet supports "Set-based" selectors (env in (prod, qa)). This makes it much more powerful for complex release strategies.

How it is used:
You rarely create a ReplicaSet directly. Instead, you create a Deployment, and the Deployment manages the ReplicaSet for you. The ReplicaSet then manages the Pods.
Deployment -> manages -> ReplicaSet -> manages -> Pods.`,
    code: `apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: frontend
spec:
  replicas: 3
  selector:
    matchLabels:
      tier: frontend
  template:
    metadata:
      labels:
        tier: frontend
    spec:
      containers:
      - name: php-redis
        image: gcr.io/google_samples/gb-frontend:v3`
  },
  "Deployment": {
    title: "Deployment",
    content: `A Deployment is the standard way to deploy stateless applications in Kubernetes.

It provides declarative updates for Pods and ReplicaSets.

What it gives you (that ReplicaTests don't):
1. Rolling Updates: Update your application version with zero downtime. It ruthlessly creates a new ReplicaSet, scales it up, and scales the old one down.
2. Rollbacks: Something broke? "kubectl rollout undo" reverts to the previous stable revision.
3. Pausing/Resuming: You can pause a deployment, make multiple changes, and resume it to trigger a single rollout.
4. History: It keeps a history of your revisions.

Strategy types:
- RollingUpdate (Default): Cycling out pods gradually.
- Recreate: Kill all existing pods, then start new ones (downtime involved).`,
    code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2 # Changing this triggers a rolling update
        ports:
        - containerPort: 80`
  },
  "DaemonSet": {
    title: "DaemonSet",
    content: `A DaemonSet ensures that all (or some) Nodes run a copy of a Pod.

Typical Lifecycle:
- Add a new Node to the cluster -> DaemonSet automatically schedules a Pod on it.
- Remove a Node -> The DaemonSet Pod is garbage collected.

Common Use Cases:
1. Cluster Storage Daemons: Running \`glusterd\` or \`ceph\` on each node.
2. Log Collection Daemons: Running \`fluentd\` or \`logstash\` on every node.
3. Node Monitoring Daemons: Running \`prometheus-node-exporter\` or \`collectd\` on every node.

Unlike a Deployment (which cares about "Total Count"), a DaemonSet cares about "Node Coverage".`,
    code: `apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd-elasticsearch
  namespace: kube-system
  labels:
    k8s-app: fluentd-logging
spec:
  selector:
    matchLabels:
      name: fluentd-elasticsearch
  template:
    metadata:
      labels:
        name: fluentd-elasticsearch
    spec:
      tolerations:
      # This DaemonSet can run on master nodes too
      - key: node-role.kubernetes.io/master
        effect: NoSchedule
      containers:
      - name: fluentd-elasticsearch
        image: quay.io/fluentd_elasticsearch/fluentd:v2.5.2`
  },
  "Service": {
    title: "Service",
    content: `A Service is an abstraction which defines a logical set of Pods and a policy by which to access them.

The Problem it Solves:
Pods are ephemeral. They die and get new IPs. If your Frontend talks to your Backend via IP 10.1.2.3, and the Backend restarts with IP 10.1.2.4, the Frontend breaks.

The Solution:
A Service provides a stable, static IP address (ClusterIP) and a stable DNS name. Traffic sent to this stable IP is load-balanced to the dynamic Pods.

Selector:
Services typically use a Label Selector to determine which Pods they send traffic to.
"Any Pod with label \`app=backend\` handles traffic for this Service."`,
    code: `apiVersion: v1
kind: Service
metadata:
  name: backend-service
spec:
  # This selector matches the Pods
  selector:
    app: backend-app
  ports:
    - protocol: TCP
      port: 80        # The port the Service listens on
      targetPort: 8080 # The port the Pod listens on`
  },

  "Service Discovery": {
    title: "Service Discovery",
    content: `Service Discovery is how applications in the cluster find each other.

Kubernetes supports two primary modes:

1. DNS (Standard):
Kubernetes runs a cluster-wide DNS server (CoreDNS). Every Service creates a DNS record.
Format: <service-name>.<namespace>.svc.cluster.local
Example: If you have a service "db" in namespace "prod", your app can connect to "db.prod".

2. Environment Variables (Legacy):
When a Pod starts, Kubelet injects environment variables for all currently running services.
Example: DB_SERVICE_HOST=10.0.0.15. (This is rarely used now because it requires the Service to exist *before* the Pod starts).

Expert Note: Always rely on DNS. It allows for loose coupling.`,
    code: `# Verify DNS from inside a Pod
kubectl run -it --rm debug --image=busybox -- restart=Never -- nslookup backend-service

# Output:
Server:    10.96.0.10
Address 1: 10.96.0.10 kube-dns.kube-system.svc.cluster.local

Name:      backend-service
Address 1: 10.105.14.23 backend-service.default.svc.cluster.local`
  },
  "Service Type: ClusterIP": {
    title: "Service Type: ClusterIP",
    content: `ClusterIP is the default Service type.

Behavior:
It assigns a virtual IP address specifically for communication *inside* the cluster.
This IP is not reachable from the outside world.

Use Case:
99% of your services (databases, internal APIs, cache) will use this. You don't want your database exposed to the public internet; you only want your frontend to reach it internally.

Debugging:
You cannot ping a ClusterIP! They are virtual rules in iptables/IPVS, not real network interfaces.`,
    code: `apiVersion: v1
kind: Service
metadata:
  name: my-internal-service
spec:
  type: ClusterIP # Default, can be omitted
  selector:
    app: my-app
  ports:
    - port: 80`
  },
  "Service Type: NodePort": {
    title: "Service Type: NodePort",
    content: `NodePort is a primitive way to expose traffic to the outside world.

Behavior:
It opens a specific port (range 30000-32767) on *every single Node* in your cluster.
Traffic sent to <NodeIP>:<NodePort> is forwarded to the Service.

Pros:
- Simple, works everywhere (even on bare metal).

Cons:
- Limited port range.
- You have to track Node IPs (which might change).
- Security risk (opening ports on hosts).

Use Case:
Quick demos or strict on-premise constraints where you have no LoadBalancer.`,
    code: `apiVersion: v1
kind: Service
metadata:
  name: my-nodeport-service
spec:
  type: NodePort
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30007 # Specific port (optional, auto-assigned if missing)`
  },
  "Service Type: LoadBalancer": {
    title: "Service Type: LoadBalancer",
    content: `LoadBalancer is the standard way to expose a Service to the internet on cloud providers (AWS, GCP, Azure).

Behavior:
It provisions a *real* external Load Balancer from your cloud provider.
This External LB gets a public IP and routes traffic to your Kubernetes Nodes keyhole.

Flow:
User -> AWS ELB (Public IP) -> NodePort (Hidden) -> Pod.

Cost Warning:
Each Service of type LoadBalancer creates a *new* separate cloud resource. If you have 50 services, you pay for 50 Load Balancers ($$$). This is why "Ingress" is often preferred (1 LB for many services).`,
    code: `apiVersion: v1
kind: Service
metadata:
  name: public-service
spec:
  type: LoadBalancer
  selector:
    app: frontend
  ports:
    - port: 80
      targetPort: 8080`
  },
  "Service Type: ExternalName": {
    title: "Service Type: ExternalName",
    content: `ExternalName is a special Service type that has no Selectors and no Pods.

Behavior:
It acts as a DNS alias (CNAME).

Use Case:
You want to access an external database (e.g., AWS RDS) using a local Kubernetes name.
Instead of hardcoding "my-db.us-east-1.rds.amazonaws.com" in your app, you point your app to "my-db-service".
The ExternalName service maps "my-db-service" -> "remote-url".

This allows you to change the external endpoint later without recompiling your app.`,
    code: `apiVersion: v1
kind: Service
metadata:
  name: my-cloud-db
spec:
  type: ExternalName
  externalName: my-database.us-east-1.rds.amazonaws.com`
  },
  "Service externalIPs": {
    title: "Service externalIPs",
    content: `externalIPs are a way to bind a Service to a specific IP address that is routed to your node(s).

Behavior:
If you specify an \`externalIP\`, Kubernetes listens for traffic arriving at that IP on the configured port and routes it to your Service.

Requirement:
Kubernetes does *not* assign this IP. You must ensure the network routing sends traffic for this IP to your nodes yourself.

Use Case:
You are migrating a legacy system and need to keep a specific hardcoded IP address operational during the transition.`,
    code: `apiVersion: v1
kind: Service
metadata:
  name: legacy-ip-service
spec:
  selector:
    app: legacy-app
  ports:
    - port: 80
  externalIPs:
    - 80.11.12.10 # Traffic hitting this IP on nodes flows to this service`
  },
  "Multi-Port Service": {
    title: "Multi-Port Service",
    content: `A Multi-Port Service allows you to expose multiple ports on a single Service object.

Why use it?
Often a single application needs to listen on multiple ports for different purposes (e.g., Main App on 80, Management UI on 8080, Metrics on 9090).

Instead of creating 3 separate Services (which would give you 3 separate ClusterIPs), you define one Service with a list of ports.

Requirement:
When using multiple ports, you MUST give each port a name so Kubernetes can disambiguate them.

Example Scenario:
- Redis master listening on 6379
- Redis Sentinel listening on 26379`,
    code: `apiVersion: v1
kind: Service
metadata:
  name: web-and-metrics
spec:
  selector:
    app: webserver
  ports:
  - name: http-web
    protocol: TCP
    port: 80
    targetPort: 80
  - name: metrics # Names are mandatory here
    protocol: TCP
    port: 9090
    targetPort: 9090`
  },
  "Port Forwarding": {
    title: "Port Forwarding",
    content: `Port Forwarding is a developer tool used to access internal cluster resources from your local machine (localhost).

It is part of kubectl, not a cluster configuration.

How it works:
It creates a secure tunnel from your laptop -> API Server -> Kubelet -> Pod.
This allows you to talk to a Pod that has NO Service and NO external IP.

Use cases:
1. Debugging: Connecting to a database inside the cluster to run a quick query.
2. Profiling: Accessing a profiling endpoint (like pprof) that is not exposed to the public internet.

Warning:
This is for debugging only! It is not reliable for production traffic. The connection will drop if your network blips or the pod restarts.`,
    code: `# Access a Pod on port 8080 via localhost:3000
kubectl port-forward pod/my-pod 3000:8080

# Access a Service on port 80 via localhost:8000
kubectl port-forward service/my-service 8000:80

# Now you can curl it locally
curl http://localhost:8000`
  },
  "Traffic Policy": {
    title: "Traffic Policy",
    content: `Internal Traffic Policy describes how traffic handles routing when the destination Pod is on the same Node as the requester.

Problem:
By default (Cluster), if Pod A on Node 1 calls Service B, traffic might be routed to Pod B on Node 2. This causes a network hop (latency + cost).

Optimization (Local):
You can set \`internalTrafficPolicy: Local\`.
This tells Kube Proxy: "If there is a Pod for this Service on MY Node, send traffic there. Do not cross the network."

Trade-off:
If the local Node has no Pods for that Service, the traffic is DROPPED. It does not fall back to other nodes.`,
    code: `apiVersion: v1
kind: Service
metadata:
  name: efficient-service
spec:
  # Optimize for latency
  internalTrafficPolicy: Local
  selector:
    app: heavy-workload
  ports:
  - port: 80`
  },
  "Authentication": {
    title: "Authentication",
    content: `Authentication (AuthN) answers the question: "Who are you?"

It is the first gate at the API Server.

Kubernetes does NOT have an internal database of users (like "bob" or "alice"). It relies on external sources or certificates.

Common Auth Strategies:
1. X.509 Client Certificates: Used by admin tools and system components. "Here is my ID card signed by the CA".
2. Static Token File: Simple CSV file (Not updated dynamically, insecure for large teams).
3. Service Accounts: The only users managed by Kubernetes API itself. Used by Pods.
4. OIDC (OpenID Connect): Connecting to Google Accounts, GitHub, Okta, etc.

If you fail this step, you get HTTP 401 Unauthorized.`,
    code: `# Inspecting a Service Account Token
kubectl create token default

# Decoding the Certificate Authority data in kubeconfig
kubectl config view --raw
# Look for "certificate-authority-data"`
  },
  "Authorization": {
    title: "Authorization",
    content: `Authorization (AuthZ) answers the question: "Are you allowed to do this?"

It happens after Authentication.

Context:
User "bob" (AuthN success) wants to "delete" (Verb) a "pod" (Resource) in "prod" (Namespace).
AuthZ checks the policies to see if this combination is permitted.

Modes:
- ABAC (Attribute-based): Legacy, file-based.
- RBAC (Role-based): The standard. Using Roles and Bindings.
- Webhook: Offload the decision to an external system (e.g., Open Policy Agent).
- Node: Special permission mode for Kubelets.

If you fail this step, you get HTTP 403 Forbidden.`,
    code: `# Check if YOU have permission to do something
kubectl auth can-i delete pods --namespace prod

# Check if SOMEONE ELSE has permission (impersonation)
kubectl auth can-i list secrets --as system:serviceaccount:default:my-sa`
  },
  "RBAC": {
    title: "RBAC",
    content: `RBAC (Role-Based Access Control) is the standard method for regulating access to the Kubernetes API.

It deals with 4 key objects:

    1. Role: Defines permissions within a Namespace. ("Can read Pods").
2. ClusterRole: Defines permissions Cluster-wide. ("Can read Nodes").
3. RoleBinding: Grants a Role to a User/Group in a specific Namespace. ("Bob has the Role").
4. ClusterRoleBinding: Grants a ClusterRole to a User/Group across the whole cluster.

  The "Rule of Least Privilege":
RBAC is "Deny by Default".You have zero permissions until a Binding gives them to you.

Expert Note:
A RoleBinding can reference a ClusterRole. This is a common pattern to reuse common permissions (like "view") but limit them to a single namespace.`,
    code: `# 1. The Role (The "What" - Namespaced)
apiVersion: rbac.authorization.k8s.io / v1
kind: Role
metadata:
namespace: default
name: pod - reader
rules:
- apiGroups: [""]
resources: ["pods", "pods/log"]
verbs: ["get", "watch", "list"]

---
# 2. The Binding (The "Who" - Namespaced)
apiVersion: rbac.authorization.k8s.io / v1
kind: RoleBinding
metadata:
  name: read-pods
namespace: default
subjects:
- kind: User
name: jane
apiGroup: rbac.authorization.k8s.io
roleRef:
kind: Role
name: pod - reader
apiGroup: rbac.authorization.k8s.io`
  },
  "ClusterRole & Binding": {
    title: "ClusterRole & Binding",
    content: `ClusterRole and ClusterRoleBinding are the "Global" versions of RBAC objects.

Differences from Role:
- Role: Lives in a namespace. Grants permissions mainly for namespace objects (Pods, Services).
- ClusterRole: Lives cluster-wide. Can grant permissions for:
  1. Cluster-scoped resources (Nodes, PersistentVolumes).
  2. Non-resource endpoints (/healthz).
  3. Namespaced resources across ALL namespaces (e.g., "View Pods everywhere").

Use Cases:
1. Admins: A "super-admin" needs control over everything in the cluster.
2. System Components: An Ingress Controller needs to watch Services in all namespaces to route traffic.
3. Monitoring: Prometheus needs to scrape metrics from Kubelets on all nodes.

The Hybrid Pattern (Expert Level):
You can bind a ClusterRole using a normal RoleBinding.
Why?
Imagine you want to give Bob "view" access to DB pods in the "dev" namespace and Alice "view" access to Web pods in the "prod" namespace.
Instead of writing a specific "view-role" in every namespace, you create ONE "view-cluster-role" and bind it locally in each namespace.
RoleBinding (Namespace A) --> ClusterRole (Global Definition).
Result: User has permissions ONLY in Namespace A, but using the shared global definition.`,
    code: `# 1. ClusterRole (Global Definition)
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  # No namespace!
  name: cluster-node-reader
rules:
- apiGroups: [""]
  resources: ["nodes", "persistentvolumes"]
  verbs: ["get", "watch", "list"]

---
# 2. ClusterRoleBinding (Global Grant)
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: read-secrets-global
subjects:
- kind: Group
  name: manager # Anyone in the "manager" group
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: secret-reader # Granting a predefined ClusterRole
  apiGroup: rbac.authorization.k8s.io`
  },
  "Admission Control": {
    title: "Admission Control",
    content: `Admission Control is the final gatekeeper. It executes after AuthN and AuthZ, but before the object is persisted to etcd.

Why do we need it ?
  AuthZ says "Bob is allowed to create a Pod".
Admission Control says "Wait, does this Pod follow our security standards? Does it have resource limits? Is it trying to run as root?".

Two Types:
1. Mutating Controllers: They change the object. (e.g., "You didn't specify a StorageClass, so I will inject 'standard' for you").
2. Validating Controllers: They accept or reject the object. (e.g., "Rejecting this Pod because it requests 100 CPUs").

Common Controllers:
- ResourceQuota: "Did this namespace run out of budget?"
  - LimitRanger: "Inject default defaults."
    - AlwaysPullImages: "Force image pull policy."`,
    code: `# Enabling Admission Plugins(in API Server flags)
--enable - admission - plugins=NamespaceLifecycle, LimitRanger, ServiceAccount, DefaultStorageClass, ResourceQuota

# Note: In modern K8s, we often use OPA Gatekeeper or Kyverno
# to write custom Admission Policies as YAML.`
  },
  "Volume": {
    title: "Volume",
    content: `A Volume in Kubernetes is a directory containing data, accessible to the containers in a Pod.

The Problem:
Files in a container are ephemeral.
1. If a container crashes, the Kubelet restarts it, but the files are lost. The container starts with a clean state.
2. If you run multiple containers in a Pod, they often need to share files.

The Solution:
A Kubernetes Volume has an explicit lifetime that is the same as the Pod. Consequently, a volume outlives any containers that run within the Pod, and data is preserved across container restarts.

Key Concepts:
- Volumes are defined at the Pod level (spec.volumes).
- Individual containers mount these volumes at specific paths (spec.containers.volumeMounts).
- A Volume is just a directory, possibly with some data in it, which is accessible to the Pod. How that directory comes to be, the medium that backs it, and the contents of it are determined by the particular volume type used.`,
    code: `apiVersion: v1
kind: Pod
metadata:
  name: volume-pod
spec:
  containers:
  - name: app
    image: busybox
    command: ["sleep", "3600"]
    volumeMounts:
    - name: data-volume
      mountPath: /data # Container sees the volume here
  volumes:
  - name: data-volume
    emptyDir: {} # Creates a temporary directory that lasts as long as the Pod`
  },
  "CSI": {
    title: "CSI",
    content: `CSI (Container Storage Interface) is the standard for exposing arbitrary block and file storage systems to containerized workloads.

History:
In the early days, volume plugins (like AWS EBS, GCE PD) were "in-tree", meaning their code was part of the core Kubernetes binary. This was a nightmare:
- To fix a bug in the AWS storage plugin, you had to release a new version of Kubernetes.
- It was difficult for 3rd party storage vendors to add support.

The CSI Revolution:
CSI allows storage vendors (NetApp, Pure, AWS, Azure) to write their own plugins (drivers) that run *outside* of Kubernetes but speak a standard protocol.
- The Kubernetes team maintains the interface.
- The vendors maintain the drivers.

How it works:
When you request a volume, Kubernetes talks to the CSI Driver registered on the cluster. The driver handles the "Attach" (connect disk to node) and "Mount" (format and mount fs) operations.`,
    code: `# Checking registered CSI drivers
kubectl get csidrivers

# Output example
NAME              ATTACHREQUIRED   PODINFOONMOUNT   STORAGECAPACITY   MODES
ebs.csi.aws.com   true             false            false             Persistent`
  },
  "Volume Types": {
    title: "Volume Types",
    content: `Kubernetes supports many types of Volumes. Knowing which one to use is critical for architecture.

Common Types:
1. emptyDir:
   - Starts empty when Pod is assigned to a Node.
   - Deleted permanently when the Pod is removed from the Node.
   - Use Case: Scratch space, cache, sharing data between sidecars.

2. hostPath:
   - Mounts a file/directory from the host Node's filesystem.
   - specific use cases only (see hostPath section).

3. persistentVolumeClaim (PVC):
   - The standard way to request durable storage (EBS, NFS, etc.).
   - Decouples storage details from the Pod.

4. configMap / secret:
   - Special volumes used to inject configuration data or credentials into the Pod.

5. nfs / iscsi / fc:
   - Direct connection to network storage (less common now; usually handled via PV/PVC abstraction).

Expert Note:
Always prefer \`persistentVolumeClaim\` over specific cloud volumes (like \`awsElasticBlockStore\`). This keeps your Pod definition portable across clouds.`
  },
  "PersistentVolume": {
    title: "PersistentVolume",
    content: `A PersistentVolume (PV) is a piece of storage in the cluster that has been provisioned by an administrator or dynamically via a StorageClass.

It is a resource in the cluster just like a Node is a cluster resource.

Key Traits:
1. Independent Lifecycle: A PV lives independently of any individual Pod. If the Pod using it dies, the PV (and its data) remains.
2. Abstract Implementation: It captures the details of the implementation (NFS, AWS EBS, GCE PD) but exposes them through a common API.

Access Modes:
- ReadWriteOnce (RWO): Mounted by a single node in read-write mode.
- ReadOnlyMany (ROX): Mounted by many nodes in read-only mode.
- ReadWriteMany (RWX): Mounted by many nodes in read-write mode (requires shared storage like NFS).

Reclaim Policy:
What happens when the user is done with the volume?
- Retain: Data is kept (requires manual cleanup).
- Delete: The underlying storage (e.g., AWS EBS volume) is deleted.`,
    code: `apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-manual
spec:
  capacity:
    storage: 10Gi
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  hostPath:
    path: "/mnt/data"`
  },
  "PersistentVolumeClaim": {
    title: "PersistentVolumeClaim",
    content: `A PersistentVolumeClaim (PVC) is a *request* for storage by a user.

Analogy:
- Pods consume Node resources (CPU/RAM).
- PVCs consume PV resources (Storage).

How it works:
1. You create a PVC saying: "I need 5Gi of ReadWriteOnce storage".
2. The Control Plane looks for a PersistentVolume that satisfies this request.
3. If it finds one (or dynamically creates one via StorageClass), it "binds" the PVC to the PV.
4. Your Pod references the *PVC*, not the PV.

Why this extra layer?
Separation of concerns.
- Developers own the PVC ("I need storage").
- Admins/Cloud providers own the PV ("Here is a disk").
Developers don't need to know if the disk is AWS EBS or Azure Disk; they just ask for 5Gi.`,
    code: `apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-claim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi

---
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
    - name: my-frontend
      image: nginx
      volumeMounts:
      - mountPath: "/var/www/html"
        name: my-storage
  volumes:
  - name: my-storage
    persistentVolumeClaim:
      claimName: my-claim`
  },
  "hostPath Volume": {
    title: "hostPath Volume",
    content: `A hostPath volume mounts a file or directory from the host node's filesystem into your Pod.

WARNING: Security & Portability Risk
Types:
- Directory: Mounts an existing directory.
- DirectoryOrCreate: Creates it if it doesn't exist.
- File: Mounts a specific file (e.g., /var/run/docker.sock).

Dangers:
1. Node Dependency: If your Pod is rescheduled to a different Node, the data is NOT there. It is stuck on the old node.
2. Security: Allowing a Pod to access host paths allows it to potentially attack the node or other tenants (e.g., mounting /etc/shadow).
3. Inconsistency: Different nodes might have different files.

Valid Use Cases:
1. Running a container that needs to access Docker internals (mount /var/run/docker.sock).
2. Running a specialized system agent (like a monitoring agent) that needs to read host metrics.`,
    code: `apiVersion: v1
kind: Pod
metadata:
  name: test-hostpath
spec:
  containers:
  - image: k8s.gcr.io/test-webserver
    name: test-container
    volumeMounts:
    - mountPath: /test-pd
      name: test-volume
  volumes:
  - name: test-volume
    hostPath:
      # directory location on host
      path: /data
      # this field is optional
      type: Directory`
  },
  "ConfigMap": {
    title: "ConfigMap",
    content: `A ConfigMap is an API object used to store non-confidential data in key-value pairs.
    
The Problem:
Hardcoding configuration (database URLs, feature flags, UI colors) inside your application code means you have to rebuild your Docker image every time you want to change a setting. This is bad for "Build Once, Deploy Anywhere".

The Solution:
Decouple the configuration from the container image.
- Image = The same for Dev, QA, Prod.
- ConfigMap = Different for Dev, QA, Prod.

How it works:
1. Create a ConfigMap with your properties.
2. Inject it into the Pod as:
   - Environment Variables (KEY=VALUE).
   - Command-line arguments.
   - Volume (mounted as a config file, e.g., /etc/config/app.properties).

Warning:
ConfigMaps are *not* encrypted. Do not store passwords or tokens here.`,
    code: `apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
  namespace: default
data:
  # Key-value pairs
  DATABASE_URL: "postgres://db-service:5432/mydb"
  UI_THEME: "dark"
  feature_flags.json: |
    {
      "new_ui": true,
      "beta_features": false
    }

---
apiVersion: v1
kind: Pod
metadata:
  name: my-app
spec:
  containers:
    - name: app-container
      image: my-app:v1
      env:
        # Inject single variable
        - name: DB_URL
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: DATABASE_URL`
  },
  "Secret": {
    title: "Secret",
    content: `A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key.
    
The Problem:
You need to pass a database password to your app.
1. Hardcoding it in code? Security nightmare.
2. Storing it in a ConfigMap? It's visible in plain text to anyone who can read ConfigMaps.

The Solution:
Use a Kubernetes Secret. 
- It communicates to the system "Handle with Care".
- It is stored in etcd (and should be encrypted at rest).
- It is mounted into Pods via RAM (tmpfs), so it never touches the Node's disk.

Encodings vs Encryption:
By default, creating a Secret via YAML requires values to be Base64 encoded.
IMPORTANT: Base64 is NOT encryption! It is just an encoding format. Anyone can decode it.
Real security comes from:
1. Enabling "Encryption at Rest" in your cluster (etcd).
2. Using RBAC to restrict who can "get" or "watch" Secrets.

Secret Types:
- Opaque: Arbitrary user-defined data (default).
- kubernetes.io/dockerconfigjson: Credentials for pulling images from a private registry.
- kubernetes.io/tls: TLS certificate and private key.` ,
    code: `apiVersion: v1
kind: Secret
metadata:
  name: db-credentials
type: Opaque
data:
  # Values MUST be base64 encoded
  # echo -n "root" | base64 -> cm9vdA==
  username: cm9vdA==
  password: cGFzc3dvcmQxMjM=

---
apiVersion: v1
kind: Pod
metadata:
  name: secure-app
spec:
  containers:
  - name: app
    image: my-app
    env:
      - name: DB_PASS
        valueFrom:
          secretKeyRef:
            name: db-credentials
            key: password`
  },
  "Ingress": {
    title: "Ingress",
    content: `An Ingress is an API object that manages external access to the services in a cluster, typically HTTP.
    
The Problem:
You have 10 microservices. Exposing all of them via "LoadBalancer" (10 LBs) is expensive and wastes IP addresses.

The Solution:
Use an Ingress.
- One single LoadBalancer (Public IP) for the cluster.
- The Ingress acts as a "Smart Router" sitting behind that IP.
- It routes traffic based on:
  1. Host (api.example.com vs web.example.com)
  2. Path (/api/v1 vs /api/v2)

Key Concept:
An Ingress resource is just a *configuration rule*. It does nothing by itself unless you have an **Ingress Controller** running (see next section).`,
    code: `apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-app-ingress
spec:
  rules:
  - host: my-app.com
    http:
      paths:
      - path: /api
        pathType: Prefix
        backend:
          service:
            name: backend-service
            port:
              number: 8080
      - path: /
        pathType: Prefix
        backend:
          service:
            name: frontend-service
            port:
              number: 80`
  },
  "Ingress Controller": {
    title: "Ingress Controller",
    content: `An Ingress Controller is the underlying application (Daemon) that reads the Ingress Resource and implements the routing rules.
    
Think of it like this:
- Ingress Resource = The "Menu" (rules).
- Ingress Controller = The "Chef" (Nginx, Traefik, HAProxy).

How it works:
1. You deploy an Ingress Controller (e.g., Nginx). It creates a LoadBalancer service and gets a Public IP.
2. You create an Ingress Resource ("Route /api to backend-service").
3. The Controller detects this new resource, re-writes its own internal configuration (nginx.conf), and reloads.
4. Traffic hits the LB -> Controller -> Backend Pod.

Common Controllers:
- NGINX Ingress Controller (Most popular).
- Traefik (Great for CRDs/middleware).
- AWS Load Balancer Controller (Integrates with ALB/NLB).`,
    code: `# Installation typically uses Helm
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

helm install my-nginx ingress-nginx/ingress-nginx \
  --namespace ingress-nginx \
  --create-namespace

# Verify it got an external IP
kubectl get svc -n ingress-nginx
# NAME                       TYPE           EXTERNAL-IP
# ingress-nginx-controller   LoadBalancer   1.2.3.4`
  },
  "Annotation": {
    title: "Annotation",
    content: `Annotations are key-value pairs attached to objects, similar to Labels.
    
The Difference:
- Labels: Used for *identifying* and *selecting* objects (e.g., "tier=frontend"). Used by Services to find Pods.
- Annotations: Used for *non-identifying metadata*. Kubernetes does not use them to select objects. 
  
Think of Labels as "Address labels" (used by the postman) and Annotations as "Sticky notes" (used by the recipient).

Common Use Cases:
1. Build Information: git commit hash, build ID, release timestamp.
2. Configuration for Libraries/Tuuls: 
   - Ingress Controllers read annotations to configure specific behaviors (e.g., "nginx.ingress.kubernetes.io/rewrite-target: /").
   - Monitoring tools read annotations to know how to scrape metrics.
   - Sidecar injectors (like Istio/Linkerd) read annotations to decide whether to inject a proxy.`,
    code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx # Label: Used for selection
  annotations:
    # Annotation: Metadata for humans or tools
    imageregistry: "https://hub.docker.com/"
    maintainer: "devops-team@example.com"
    buildId: "v1.2.3-beta.1"
    
    # Example for an Ingress Controller
    nginx.ingress.kubernetes.io/ssl-redirect: "true"`
  },
  "Resource Quota": {
    title: "Resource Quota",
    content: `A ResourceQuota provides constraints that limit aggregate resource consumption per Namespace.
    
The Problem:
You have a multi-tenant cluster (Dev, QA, Prod sharing the same cluster).
If the "Dev" team launches a Pod asking for 100 CPUs, they might starve the "Prod" namespace.

The Solution:
Apply a ResourceQuota to the "Dev" namespace.
- Limit total CPU/RAM usage.
- Limit total number of objects (Pods, Services, PVCs).

Behavior:
If a user tries to create a Pod that would exceed the quota, the API Server REJECTS the request with a 403 Forbidden.
Critical Requirement: If a Quota is enabled for CPU/RAM, *every* Pod in that namespace MUST specify requests/limits, otherwise it will be rejected (or you must have a LimitRange).`,
    code: `apiVersion: v1
kind: ResourceQuota
metadata:
  name: dev-quota
  namespace: dev
spec:
  hard:
    # Compute Resources
    requests.cpu: "4"
    requests.memory: "8Gi"
    limits.cpu: "10"
    limits.memory: "16Gi"
    
    # Object Counts
    pods: "10"
    services: "5"
    persistentvolumeclaims: "5"`
  },
  "LimitRange": {
    title: "LimitRange",
    content: `A LimitRange is a policy to constrain the resource allocations (Limits/Requests) of *individual* Pods or Containers in a namespace.
    
ResourceQuota vs LimitRange:
- ResourceQuota: "The whole namespace cannot use more than 100GB." (Aggregate)
- LimitRange: "No single Pod can use more than 2GB." (Individual)

Use Cases:
1. Enforce Defaults: "If the user forgets to set CPU requests, give them 200m by default."
2. Enforce Mins/Maxs: "No Pod is allowed to ask for more than 4 CPUs." (Prevents one giant pod from hogging a node).
3. Enforce Ratio: "Limit cannot be more than 2x Request."

If a Pod violates these rules, it is rejected.`,
    code: `apiVersion: v1
kind: LimitRange
metadata:
  name: mem-limit-range
spec:
  limits:
  - default: # Default limit if not specified
      memory: 512Mi
    defaultRequest: # Default request if not specified
      memory: 256Mi
    type: Container`
  },
  "Autoscaling": {
    title: "Autoscaling",
    content: `Autoscaling ensures your cluster adapts to load automatically.
    
1. Horizontal Pod Autoscaler (HPA):
   - Scales the number of Pods (Replicas) based on metrics (CPU, Memory, Custom Metrics).
   - "Traffic is high? Add 5 more pods."
   
2. Vertical Pod Autoscaler (VPA):
   - Scales the size of the Pods (Requests/Limits).
   - "This pod is crashing OOM? Restart it with 2GB RAM instead of 1GB."
   
3. Cluster Autoscaler:
   - Scales the number of Nodes (Machines).
   - "Pods are pending because there is no room? Buy a new EC2 instance from AWS."

HPA is the most common for stateless apps.`,
    code: `apiVersion: autoscaling/v1
kind: HorizontalPodAutoscaler
metadata:
  name: php-apache
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: php-apache
  minReplicas: 1
  maxReplicas: 10
  targetCPUUtilizationPercentage: 50
  
# Result: 
# If CPU > 50%, add pods.
# If CPU < 50%, remove pods.`
  },
  "Job": {
    title: "Job",
    content: `A Job creates one or more Pods and ensures that a specified number of them successfully terminate (complete).
    
Difference from Deployment:
- Deployment: Ensures Pods are *always running* (Restart on exit). Used for Web Servers.
- Job: Ensures Pods *finish* successfully (Do not restart on success). Used for batch tasks.

Use Cases:
1. Database migration scripts.
2. Video rendering / Transcoding.
3. Sending a batch of emails.

If a Pod fails (exit code 1), the Job controller will start a new Pod to replace it until it succeeds.`,
    code: `apiVersion: batch/v1
kind: Job
metadata:
  name: pi
spec:
  template:
    spec:
      containers:
      - name: pi
        image: perl
        command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never
  backoffLimit: 4 # Retry 4 times before considering the Job FAILED`
  },
  "CronJob": {
    title: "CronJob",
    content: `A CronJob creates Jobs on a repeating schedule.
    
It is exactly like a Linux cron line \`* * * * *\` but for Kubernetes Jobs.
    
Schedule Syntax:
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of the month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday)
│ │ │ │ │
* * * * *

Use Cases:
1. Daily database backup at 2 AM.
2. Generating weekly reports.
    
History Limits:
Since CronJobs create Jobs, you can end up with thousands of completed Jobs cluttering your cluster. Use \`successfulJobsHistoryLimit\` to auto-clean them.`,
    code: `apiVersion: batch/v1
kind: CronJob
metadata:
  name: hello
spec:
  schedule: "*/1 * * * *" # Run every minute
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: hello
            image: busybox
            imagePullPolicy: IfNotPresent
            command:
            - /bin/sh
            - -c
            - date; echo Hello from the Kubernetes cluster
          restartPolicy: OnFailure`
  },
  "StatefulSet": {
    title: "StatefulSet",
    content: `StatefulSet is the workload API used to manage stateful applications.
    
Stateful vs Stateless:
- Stateless (Deployment): Cattle. Pods are interchangeable. "web-xyz" is same as "web-abc".
- Stateful (StatefulSet): Pets. Pods have a unique, persistent identity. "db-0" is NOT the same as "db-1".
    
Key Features:
1. Stable Network ID: Pods get names like \`web-0\`, \`web-1\`, \`web-2\`. These persist across restarts.
2. Stable Storage: Uses \`volumeClaimTemplates\`. \`web-0\` always gets \`pvc-web-0\`. If \`web-0\` dies and comes back on another node, it re-attaches to the SAME disk.
3. Ordered Deployment: Starts 0, then 1, then 2.
    
Use Cases:
- Databases (PostgreSQL, MySQL).
- Distributed systems (Zookeeper, Kafka, Elasticsearch).`,
    code: `apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  serviceName: "nginx" # Headless Service required for network identity
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: k8s.gcr.io/nginx-slim:0.8
        ports:
        - containerPort: 80
          name: web
        volumeMounts:
        - name: www
          mountPath: /usr/share/nginx/html
  volumeClaimTemplates: # Automatically creates PVCs for each Pod
  - metadata:
      name: www
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 1Gi`
  },
  "Custom Resource": {
    title: "Custom Resource",
    content: `Custom Resources (CRs) allow you to extend the Kubernetes API with your own API objects.
    
Concepts:
1. CRD (Custom Resource Definition): The schema. It tells Kubernetes "I want to create a new type of object called 'CronTab'".
2. CR (Custom Resource): The instance. "Create a CronTab named 'my-crontab'".
3. Operator/Controller: The code running in a Pod that watches for CRs and makes them happen.
    
Why is this powerful?
It allows "Infrastructure as Code" for anything.
- "kubectl create postgresql" (using a Postgres Operator).
- "kubectl create prometheus" (using Prometheus Operator).`,
    code: `# 1. The Definition (Schema)
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  name: crontabs.stable.example.com
spec:
  group: stable.example.com
  versions:
    - name: v1
      served: true
      storage: true
      schema:
        openAPIV3Schema:
          type: object
          properties:
            spec:
              type: object
              properties:
                cronSpec:
                  type: string
                image:
                  type: string
  scope: Namespaced
  names:
    plural: crontabs
    singular: crontab
    kind: CronTab
    shortNames:
    - ct

---
# 2. The Instance (Usage)
apiVersion: "stable.example.com/v1"
kind: CronTab
metadata:
  name: my-new-cron-object
spec:
  cronSpec: "* * * * */5"
  image: my-awesome-cron-image`
  },
  "Security Context": {
    title: "Security Context",
    content: `A Security Context defines privilege and access control settings for a Pod or Container.
    
It answers:
- "What User ID (UID) should this process run as?"
- "What Linux Capabilities does it have?" (e.g., can it modify the network stack?)
- "Is the filesystem read-only?"
    
Key Fields:
- \`runAsUser\`: The UID to run the process.
- \`runAsGroup\`: The GID.
- \`fsGroup\`: A special group applied to all volumes mounted by the Pod (useful for sharing files).
- \`privileged\`: Run as root with FULL host access (Dangerous!).
    
Best Practice:
Always set \`runAsNonRoot: true\` to prevent attacks.`,
    code: `apiVersion: v1
kind: Pod
metadata:
  name: security-context-demo
spec:
  securityContext:
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
  containers:
  - name: sec-ctx-demo
    image: busybox
    command: [ "sh", "-c", "sleep 1h" ]
    securityContext:
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true`
  },
  "Pod Security Admission": {
    title: "Pod Security Admission",
    content: `Pod Security Admission (PSA) is the built-in way to restrict what Pods can do in a namespace. It replaces the deprecated PodSecurityPolicy (PSP).
    
It works via **Namespace Labels**.
    
Levels:
1. Privileged: Unrestricted (allow root, allow hostPath).
2. Baseline: Minimally restrictive limits (prevents known privilege escalations).
3. Restricted: Heavily restricted (requires non-root, drops capabilities).
    
Modes:
- enforce: Reject pod if it violates rules.
- audit: Allow it, but log a warning in audit logs.
- warn: Allow it, but show a warning to the user.`,
    code: `# Label a namespace to ENFORCE the 'restricted' standard
kubectl label namespace my-secure-ns \
  pod-security.kubernetes.io/enforce=restricted \
  pod-security.kubernetes.io/enforce-version=latest

# Now, if you try to run a privileged pod in this namespace:
# Error: "violates PodSecurity 'restricted': privileged (container 'main' must not set securityContext.privileged=true)"`
  },
  "Network Policy": {
    title: "Network Policy",
    content: `A Network Policy is the Kubernetes equivalent of a firewall rule. It controls traffic *at the IP address or port level* (Layer 3/4).

The Golden Rule:
By default, Kubernetes is "Open by Default". Any Pod in any namespace can talk to any other Pod.
Once you apply a Network Policy that selects a Pod, that Pod becomes "Default Deny". It blocks EVERYTHING except what you explicitly whitelist.

Ingress vs Egress:
- Ingress (Incoming): Traffic trying to enter the Pod. "Who is allowed to talk to me?"
  - Example: Only the Frontend Pods can talk to the Database Pod.
- Egress (Outgoing): Traffic trying to leave the Pod. "Who am I allowed to talk to?"
  - Example: The Backend can only talk to the Postgres Database, not to the public internet.

The Whitelist Analogy:
Think of your Pod as a VIP club.
1. No Policy = The door is wide open. Anyone enters.
2. Policy Applied = A Bouncer stands at the door. No one enters unless they are on the list.
3. Ingress Rule = The Guest List.

Prerequisite:
You MUST have a CNI plugin that enforces policies (Calico, Cilium, Antrea, AWS VPC CNI). If you use a basic CNI (like Flannel), policies are ignored!`,
    code: `apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: secure-db-policy
  namespace: prod
spec:
  # 1. Select the VIPs (The Pods this policy protects)
  podSelector:
    matchLabels:
      role: db

  # 2. What traffic direction are we controlling?
  policyTypes:
  - Ingress
  - Egress

  # 3. Ingress Rules (Who can enter?)
  ingress:
  - from:
    # Allow traffic from Pods with label "role=frontend"
    - podSelector:
        matchLabels:
          role: frontend
    # Allow traffic from specific IP range (e.g., VPN)
    - ipBlock:
        cidr: 172.17.0.0/16
        except:
        - 172.17.1.0/24
    ports:
    - protocol: TCP
      port: 5432

  # 4. Egress Rules (Where can they go?)
  egress:
  - to:
    # Allow talking to the backup server IP
    - ipBlock:
        cidr: 10.0.0.0/24
    ports:
    - protocol: TCP
      port: 5978`
  }
};

export const getKubernetesLanguageContent = (): LearnLanguage => {
  return {
    id: "kubernetes",
    name: "Kubernetes",
    icon: "Server",
    topics: topicsOfKubernetes.map((topic) => ({
      id: `kubernetes - ${topic.toLowerCase().replace(/\s+/g, "-")} `,
      title: topic,
      content: topicContentsOfKubernetes[topic]?.content || "",
      code: topicContentsOfKubernetes[topic]?.code,
      image: topicContentsOfKubernetes[topic]?.image,
    })),
  };
};