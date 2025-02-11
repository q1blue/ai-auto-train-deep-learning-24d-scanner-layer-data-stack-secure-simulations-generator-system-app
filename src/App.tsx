import React, { useState } from 'react';
import { Brain, Network, Cpu, Zap, Compass, Atom, Globe, Cloud } from 'lucide-react';

function App() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Atom className="w-8 h-8 text-blue-400 animate-pulse" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Crystal AI Quantum Mindmap
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors border border-blue-500/50">
              Connect Quantum Node
            </button>
            <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors">
              Start Training
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Dimension Controls */}
        <div className="flex gap-4 mb-8">
          <DimensionButton icon={<Globe />} label="3D Space" active={true} />
          <DimensionButton icon={<Cloud />} label="Time Axis" active={false} />
          <DimensionButton icon={<Compass />} label="Quantum State" active={false} />
        </div>

        {/* Quantum Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Tools Panel */}
          <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h2 className="text-xl font-semibold mb-4">Quantum Tools</h2>
            <div className="space-y-4">
              <ToolButton icon={<Network />} label="Add Node" />
              <ToolButton icon={<Cpu />} label="Process Node" />
              <ToolButton icon={<Brain />} label="AI Analyze" />
              <ToolButton icon={<Zap />} label="Quantum Link" />
            </div>
          </div>

          {/* Main Workspace */}
          <div className="lg:col-span-3 space-y-6">
            {/* Mindmap Visualization */}
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-4">Quantum Mindmap</h2>
              <div className="bg-black/50 rounded-lg h-[500px] p-4 flex items-center justify-center">
                <div className="text-center">
                  <Atom className="w-16 h-16 text-blue-400 mx-auto mb-4 animate-spin-slow" />
                  <p className="text-gray-400">
                    Quantum mindmap visualization space...
                  </p>
                </div>
              </div>
            </section>

            {/* Training Configuration */}
            <section className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h2 className="text-xl font-semibold mb-4">Quantum Training</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Quantum States
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="Enter number of states"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Entanglement Rate
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                    placeholder="Enter entanglement rate"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function DimensionButton({ icon, label, active }: { icon: React.ReactNode; label: string; active: boolean }) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        active
          ? 'bg-blue-500 text-white'
          : 'bg-black/30 text-gray-400 hover:bg-black/40'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function ToolButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-black/20 hover:bg-black/30 transition-colors text-gray-300 hover:text-white">
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default App;