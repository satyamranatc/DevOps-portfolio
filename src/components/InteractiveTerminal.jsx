import { useState, useRef, useEffect } from "react";

const INITIAL_HISTORY = [
  {
    command: "neofetch --devops",
    output: (
      <div className="text-gray-300 space-y-1 font-mono text-xs sm:text-sm">
        <span className="text-cyan-400 font-bold">nilesh@devops-cluster</span>
        <div>------------------------</div>
        <div><span className="text-cyan-400">OS:</span> Ubuntu 24.04 LTS (AWS EC2 / Linux)</div>
        <div><span className="text-cyan-400">Role:</span> Junior DevOps & Cloud Infrastructure Engineer</div>
        <div><span className="text-cyan-400">Core Stack:</span> AWS, Docker, Kubernetes, Terraform, GitHub Actions, Nginx</div>
        <div><span className="text-cyan-400">Status:</span> <span className="text-emerald-400">● Open for Opportunities</span></div>
      </div>
    ),
  },
];

const QUICK_COMMANDS = [
  "docker ps",
  "kubectl get pods",
  "terraform plan",
  "skills",
  "cat pipeline.yml",
];

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    let output = null;
    const lower = cmd.toLowerCase();

    if (lower === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else if (lower === "help") {
      output = (
        <div className="space-y-1 text-gray-300 text-xs sm:text-sm font-mono">
          <p className="text-cyan-300">Available commands:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-1 text-gray-400">
            <div><span className="text-cyan-400">docker ps</span> - List active container services</div>
            <div><span className="text-cyan-400">kubectl get pods</span> - View Kubernetes cluster pods</div>
            <div><span className="text-cyan-400">terraform plan</span> - Inspect AWS infrastructure state</div>
            <div><span className="text-cyan-400">skills</span> - Display verified DevOps skill matrix</div>
            <div><span className="text-cyan-400">cat pipeline.yml</span> - Inspect GitHub Actions workflow</div>
            <div><span className="text-cyan-400">whoami</span> - Developer profile summary</div>
            <div><span className="text-cyan-400">uptime</span> - System availability telemetry</div>
            <div><span className="text-cyan-400">clear</span> - Clear terminal screen</div>
          </div>
        </div>
      );
    } else if (lower === "docker ps") {
      output = (
        <div className="font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
          <div className="text-gray-500 font-semibold mb-1">
            CONTAINER ID   IMAGE                  COMMAND                  STATUS         PORTS
          </div>
          <div className="text-emerald-400">
            9f3b81ac02e1   nilesh/react-app:v2.4  "nginx -g 'daemon..."    Up 14 days     0.0.0.0:80-&gt;80/tcp
          </div>
          <div className="text-cyan-400">
            7c1d42be910a   nilesh/spring-api:v2.1 "java -jar app.jar"      Up 14 days     0.0.0.0:8080-&gt;8080/tcp
          </div>
          <div className="text-yellow-400">
            4a8e23f091c8   mysql:8.0-debian       "docker-entrypoint..."   Up 14 days     0.0.0.0:3306-&gt;3306/tcp
          </div>
        </div>
      );
    } else if (lower === "kubectl get pods" || lower === "kubectl get pods -a") {
      output = (
        <div className="font-mono text-xs sm:text-sm text-gray-300 overflow-x-auto">
          <div className="text-gray-500 font-semibold mb-1">
            NAME                              READY   STATUS    RESTARTS   AGE     IP
          </div>
          <div className="text-emerald-400">
            frontend-deployment-78bdf6-x29q   1/1     Running   0          48h     10.244.1.24
          </div>
          <div className="text-emerald-400">
            frontend-deployment-78bdf6-m9kp   1/1     Running   0          48h     10.244.2.19
          </div>
          <div className="text-cyan-400">
            backend-api-5c7499df89-v4z12      1/1     Running   0          48h     10.244.1.25
          </div>
          <div className="text-purple-400">
            db-cluster-statefulset-0          1/1     Running   0          5d      10.244.3.02
          </div>
        </div>
      );
    } else if (lower === "terraform plan") {
      output = (
        <div className="font-mono text-xs sm:text-sm text-gray-300 space-y-1">
          <p className="text-cyan-400">Terraform will perform the following actions:</p>
          <div className="text-emerald-400">+ aws_instance.web_app_cluster</div>
          <div className="text-emerald-400">+ aws_security_group.allow_http_https_ssh</div>
          <div className="text-emerald-400">+ aws_vpc.devops_production_vpc</div>
          <div className="text-gray-400 mt-2">
            Plan: <span className="text-emerald-400 font-bold">3 to add</span>, 0 to change, 0 to destroy.
          </div>
        </div>
      );
    } else if (lower === "skills") {
      output = (
        <div className="font-mono text-xs sm:text-sm text-gray-300 space-y-1">
          <p className="text-cyan-300 font-bold">DevOps & Cloud Capabilities:</p>
          <div>• <span className="text-cyan-400">Cloud:</span> AWS (EC2, VPC, IAM, S3, Security Groups)</div>
          <div>• <span className="text-cyan-400">Containers:</span> Docker, Multi-stage builds, Docker Compose, Kubernetes</div>
          <div>• <span className="text-cyan-400">CI/CD:</span> GitHub Actions automated test & deploy pipelines</div>
          <div>• <span className="text-cyan-400">IaC:</span> Terraform, Modular configuration</div>
          <div>• <span className="text-cyan-400">Web & Ops:</span> Linux/Bash, Nginx reverse proxy, Spring Boot, React, MySQL</div>
        </div>
      );
    } else if (lower === "cat pipeline.yml") {
      output = (
        <pre className="font-mono text-xs text-gray-300 bg-black/40 p-3 rounded-lg border border-white/5 overflow-x-auto">
{`name: Deploy to Production AWS EC2
on:
  push:
    branches: [ "main" ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build & Push Docker Image
        run: docker build -t nilesh2033parmar/app:latest .
      - name: Deploy to AWS EC2 via SSH
        uses: appleboy/ssh-action@master
        with:
          host: \${{ secrets.EC2_HOST }}
          username: ubuntu
          key: \${{ secrets.EC2_SSH_KEY }}
          script: |
            docker pull nilesh2033parmar/app:latest
            docker-compose up -d --force-recreate`}
        </pre>
      );
    } else if (lower === "whoami") {
      output = (
        <div className="font-mono text-xs sm:text-sm text-gray-300">
          <span className="text-cyan-400 font-semibold">Nilesh Parmar</span> — Junior DevOps Engineer (BBA ➔ MCA) passionate about building scalable, automated infrastructure.
        </div>
      );
    } else if (lower === "uptime") {
      output = (
        <div className="font-mono text-xs sm:text-sm text-emerald-400">
          ● System Uptime: 99.99% | Load avg: 0.12, 0.08, 0.04 | All cloud services operational
        </div>
      );
    } else {
      output = (
        <div className="font-mono text-xs sm:text-sm text-rose-400">
          zsh: command not found: {cmd}. Type <span className="text-cyan-400 underline cursor-pointer" onClick={() => handleCommand("help")}>help</span> for commands.
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal("");
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl glass-panel overflow-hidden border border-white/10 shadow-2xl relative">
      {/* Terminal Title Bar */}
      <div className="bg-[#090C15]/90 px-4 py-3 border-b border-white/10 flex items-center justify-between select-none">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-sm hover:opacity-80 transition cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-sm hover:opacity-80 transition cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-sm hover:opacity-80 transition cursor-pointer" />
          <span className="text-xs font-mono text-gray-400 ml-2 hidden sm:inline">
            nilesh@devops-node-01: ~/infrastructure
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>zsh — live</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        className="p-5 sm:p-6 font-mono text-sm max-h-[380px] overflow-y-auto space-y-4 bg-[#060810]/95"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="text-xs text-gray-500 pb-2 border-b border-white/5 flex items-center justify-between">
          <span>Antigravity Cloud CLI v2.4 (arm64-darwin)</span>
          <span>Try: <code className="text-cyan-400">help</code></span>
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex items-center gap-2 text-gray-300">
              <span className="text-cyan-400 font-bold">➜</span>
              <span className="text-indigo-400">~/devops</span>
              <span className="text-emerald-400 font-semibold">$</span>
              <span className="text-white font-medium">{item.command}</span>
            </div>
            {item.output && <div className="pl-4 sm:pl-6">{item.output}</div>}
          </div>
        ))}

        {/* Active Input Line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="flex items-center gap-2 text-gray-300 pt-1"
        >
          <span className="text-cyan-400 font-bold">➜</span>
          <span className="text-indigo-400">~/devops</span>
          <span className="text-emerald-400 font-semibold">$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type a command (e.g. docker ps, help, skills)..."
            className="flex-1 bg-transparent text-white focus:outline-none font-mono text-xs sm:text-sm placeholder:text-gray-600 caret-cyan-400"
            autoFocus
          />
        </form>

        <div ref={bottomRef} />
      </div>

      {/* Interactive Quick Chip Bar */}
      <div className="bg-[#090C15]/90 px-4 py-2.5 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-gray-500 font-mono text-[11px] uppercase tracking-wider mr-1">
          Quick Run:
        </span>
        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => handleCommand(cmd)}
            className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-cyan-500/10 hover:text-cyan-300 text-gray-300 border border-white/10 font-mono text-xs transition duration-150 cursor-pointer"
          >
            {cmd}
          </button>
        ))}
        <button
          type="button"
          onClick={() => handleCommand("clear")}
          className="ml-auto px-2 py-1 rounded-md text-gray-500 hover:text-rose-400 font-mono text-xs transition cursor-pointer"
        >
          clear
        </button>
      </div>
    </div>
  );
}
