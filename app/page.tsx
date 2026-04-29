"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ─── Inline SVG icons ───────────────────────────────────────────────
function IconPiano({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M8 4v10M12 4v10M16 4v10" />
      <path d="M6 4v6h4V4M10 4v6h4V4M14 4v6h4V4" />
    </svg>
  );
}
function IconMusic({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
    </svg>
  );
}
function IconGuitar({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4l-3.5 3.5M16.5 7.5l-2 2M11 13a4 4 0 1 1-5.66 5.66A4 4 0 0 1 11 13z" />
      <path d="M14.5 9.5L11 13M8.5 16.5l-1 1" />
    </svg>
  );
}
function IconWave({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12c1.5-3 3-5 4.5 0s3 3 4.5 0 3-5 4.5 0 3 3 4.5 0" />
    </svg>
  );
}
function IconVolume({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}
function IconReverb({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h2M6 8v8M10 5v14M14 8v8M18 6v12M22 10v4" />
    </svg>
  );
}
function IconDelay({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function IconChorus({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" />
      <path d="M2 16c2-3 4-3 6 0s4 3 6 0 4-3 6 0" opacity="0.4" />
    </svg>
  );
}
function IconDistortion({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function IconCompressor({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5l-5 5-5-5M7 19l5-5 5 5" />
    </svg>
  );
}
function IconMixer({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}
function IconStar({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
function IconSparkle({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
    </svg>
  );
}
function IconMenu({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
function IconX({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

// ─── Note definitions ───────────────────────────────────────────────
const BASE_NOTES = [
  { note: "C", key: "q", type: "white", semitone: 0 },
  { note: "C#", key: "2", type: "black", semitone: 1 },
  { note: "D", key: "w", type: "white", semitone: 2 },
  { note: "D#", key: "3", type: "black", semitone: 3 },
  { note: "E", key: "e", type: "white", semitone: 4 },
  { note: "F", key: "r", type: "white", semitone: 5 },
  { note: "F#", key: "5", type: "black", semitone: 6 },
  { note: "G", key: "t", type: "white", semitone: 7 },
  { note: "G#", key: "6", type: "black", semitone: 8 },
  { note: "A", key: "y", type: "white", semitone: 9 },
  { note: "A#", key: "7", type: "black", semitone: 10 },
  { note: "B", key: "u", type: "white", semitone: 11 },
  { note: "C+", key: "i", type: "white", semitone: 12 },
  { note: "C#+", key: "9", type: "black", semitone: 13 },
  { note: "D+", key: "o", type: "white", semitone: 14 },
  { note: "D#+", key: "0", type: "black", semitone: 15 },
  { note: "E+", key: "p", type: "white", semitone: 16 },
  { note: "F+", key: "[", type: "white", semitone: 17 },
  { note: "F#+", key: "=", type: "black", semitone: 18 },
  { note: "G+", key: "]", type: "white", semitone: 19 },
];

function getFrequency(semitone: number, octave: number): number {
  const semitonesFromA4 = semitone - 9 + (octave - 4) * 12;
  return 440 * Math.pow(2, semitonesFromA4 / 12);
}

function getNoteLabel(note: string, octave: number): string {
  const isUpper = note.includes("+");
  const base = note.replace("+", "");
  return `${base}${isUpper ? octave + 1 : octave}`;
}

// ─── Instruments ────────────────────────────────────────────────────
type Instrument = { id: string; name: string; category: string; icon: React.ReactNode };

const INSTRUMENTS: Instrument[] = [
  { id: "piano", name: "Piano", category: "Piano", icon: <IconPiano /> },
  { id: "grand-piano", name: "Grand Piano", category: "Piano", icon: <IconMusic /> },
  { id: "acoustic-guitar", name: "Acoustic", category: "Guitar", icon: <IconGuitar /> },
  { id: "nylon-guitar", name: "Nylon", category: "Guitar", icon: <IconWave /> },
  { id: "pluck", name: "Pluck", category: "Synth", icon: <IconStar /> },
  { id: "pluck-soft", name: "Soft Pluck", category: "Synth", icon: <IconSparkle /> },
];

// ─── Mixer types ────────────────────────────────────────────────────
type MixerState = {
  volume: number; reverb: number; delay: number; delayTime: number;
  chorus: number; distortion: number; compressor: number;
};

const DEFAULT_MIXER: MixerState = {
  volume: 80, reverb: 20, delay: 0, delayTime: 30,
  chorus: 0, distortion: 0, compressor: 0,
};

// ─── Audio engine ───────────────────────────────────────────────────
function createReverbImpulse(ctx: AudioContext, duration: number, decay: number): AudioBuffer {
  const rate = ctx.sampleRate;
  const length = rate * duration;
  const impulse = ctx.createBuffer(2, length, rate);
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
  }
  return impulse;
}

function createInstrumentOscillators(
  ctx: AudioContext, freq: number, instrumentId: string, output: AudioNode
) {
  switch (instrumentId) {
    case "piano": {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.type = "triangle"; osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.5, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
      osc.connect(gain); gain.connect(output);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 1.5);
      break;
    }
    case "grand-piano": {
      [1, 2, 3, 4, 5].forEach((h, i) => {
        const vols = [0.4, 0.15, 0.08, 0.04, 0.02];
        const osc = ctx.createOscillator(), g = ctx.createGain();
        osc.type = i === 0 ? "triangle" : "sine";
        osc.frequency.setValueAtTime(freq * h, ctx.currentTime);
        g.gain.setValueAtTime(vols[i], ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.5);
        osc.connect(g); g.connect(output);
        osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 2.5);
      });
      break;
    }
    case "acoustic-guitar": {
      const osc1 = ctx.createOscillator(), osc2 = ctx.createOscillator();
      const gain = ctx.createGain(), filter = ctx.createBiquadFilter();
      osc1.type = "sawtooth"; osc1.frequency.setValueAtTime(freq, ctx.currentTime);
      osc2.type = "triangle"; osc2.frequency.setValueAtTime(freq * 2, ctx.currentTime);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(3000, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.45, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc1.connect(filter); osc2.connect(filter); filter.connect(gain); gain.connect(output);
      osc1.start(ctx.currentTime); osc2.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 1.2); osc2.stop(ctx.currentTime + 1.2);
      break;
    }
    case "nylon-guitar": {
      const osc = ctx.createOscillator(), osc2 = ctx.createOscillator();
      const gain = ctx.createGain(), filter = ctx.createBiquadFilter();
      osc.type = "sine"; osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc2.type = "sine"; osc2.frequency.setValueAtTime(freq * 3, ctx.currentTime);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1500, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + 0.5);
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.8);
      const g2 = ctx.createGain();
      g2.gain.setValueAtTime(0.06, ctx.currentTime);
      g2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.connect(filter); osc2.connect(g2); g2.connect(filter);
      filter.connect(gain); gain.connect(output);
      osc.start(ctx.currentTime); osc2.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.8); osc2.stop(ctx.currentTime + 1.8);
      break;
    }
    case "pluck": {
      const osc = ctx.createOscillator(), gain = ctx.createGain(), filter = ctx.createBiquadFilter();
      osc.type = "square"; osc.frequency.setValueAtTime(freq, ctx.currentTime);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(5000, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.5, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
      osc.connect(filter); filter.connect(gain); gain.connect(output);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.6);
      break;
    }
    case "pluck-soft": {
      const osc = ctx.createOscillator(), gain = ctx.createGain(), filter = ctx.createBiquadFilter();
      osc.type = "sine"; osc.frequency.setValueAtTime(freq, ctx.currentTime);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(2500, ctx.currentTime);
      filter.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.3);
      filter.Q.setValueAtTime(5, ctx.currentTime);
      gain.gain.setValueAtTime(0.45, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.9);
      osc.connect(filter); filter.connect(gain); gain.connect(output);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 0.9);
      break;
    }
    default: {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.type = "triangle"; osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.5, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
      osc.connect(gain); gain.connect(output);
      osc.start(ctx.currentTime); osc.stop(ctx.currentTime + 1.5);
    }
  }
}

// ─── Mixer slider component ────────────────────────────────────────
function MixerSlider({
  label, value, onChange, icon, color = "orange",
}: {
  label: string; value: number; onChange: (v: number) => void; icon: React.ReactNode; color?: string;
}) {
  const colorMap: Record<string, string> = {
    orange: "from-orange-500 to-orange-600",
    amber: "from-amber-500 to-amber-600",
    rose: "from-rose-500 to-rose-600",
  };
  const trackColor = colorMap[color] ?? colorMap.orange;

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[11px] text-zinc-500 group-hover:text-zinc-300 transition-colors flex items-center gap-1.5 font-medium">
          <span className="text-orange-400/70 group-hover:text-orange-400 transition-colors">{icon}</span>
          {label}
        </span>
        <span className="text-[11px] text-zinc-600 group-hover:text-zinc-400 transition-colors tabular-nums font-mono">
          {value}%
        </span>
      </div>
      <div className="relative h-1.5 rounded-full bg-zinc-800/80 overflow-hidden">
        <div
          className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${trackColor} transition-all duration-75`}
          style={{ width: `${value}%` }}
        />
        <input
          type="range" min={0} max={100} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

// ─── Sidebar content (shared between desktop sidebar and mobile drawer) ──
function InstrumentPanel({
  instrument, setInstrument, categories,
}: {
  instrument: string;
  setInstrument: (id: string) => void;
  categories: Record<string, Instrument[]>;
}) {
  return (
    <>
      <p className="text-[10px] font-semibold text-orange-400/40 uppercase tracking-[0.15em] px-2 mb-3">
        Instruments
      </p>
      <nav className="flex flex-col gap-4">
        {Object.entries(categories).map(([category, instruments]) => (
          <div key={category}>
            <p className="text-[10px] font-medium text-zinc-600 uppercase tracking-[0.12em] px-2 mb-1.5">
              {category}
            </p>
            <div className="flex flex-col gap-0.5">
              {instruments.map((inst) => {
                const isActive = instrument === inst.id;
                return (
                  <button
                    key={inst.id}
                    onClick={() => setInstrument(inst.id)}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition-all cursor-pointer ${
                      isActive
                        ? "bg-orange-500/[0.1] text-orange-100 border border-orange-500/[0.15]"
                        : "text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-300 border border-transparent"
                    }`}
                  >
                    <span className={`${isActive ? "text-orange-400" : "text-zinc-600"} transition-colors`}>
                      {inst.icon}
                    </span>
                    <span className="font-medium">{inst.name}</span>
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-orange-400 shadow-sm shadow-orange-400/50" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </>
  );
}

function MixerPanel({
  mixer, updateMixer, resetMixer,
}: {
  mixer: MixerState;
  updateMixer: (key: keyof MixerState, value: number) => void;
  resetMixer: () => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="text-[10px] font-semibold text-orange-400/40 uppercase tracking-[0.15em] mb-3">Output</p>
        <MixerSlider icon={<IconVolume className="w-3.5 h-3.5" />} label="Volume" value={mixer.volume} onChange={(v) => updateMixer("volume", v)} color="orange" />
      </div>
      <div className="h-px bg-orange-500/[0.06]" />
      <div>
        <p className="text-[10px] font-semibold text-orange-400/40 uppercase tracking-[0.15em] mb-3">Space</p>
        <div className="flex flex-col gap-4">
          <MixerSlider icon={<IconReverb className="w-3.5 h-3.5" />} label="Reverb" value={mixer.reverb} onChange={(v) => updateMixer("reverb", v)} color="amber" />
          <MixerSlider icon={<IconDelay className="w-3.5 h-3.5" />} label="Delay" value={mixer.delay} onChange={(v) => updateMixer("delay", v)} color="amber" />
          <MixerSlider icon={<IconDelay className="w-3.5 h-3.5" />} label="Delay Time" value={mixer.delayTime} onChange={(v) => updateMixer("delayTime", v)} color="amber" />
          <MixerSlider icon={<IconChorus className="w-3.5 h-3.5" />} label="Chorus" value={mixer.chorus} onChange={(v) => updateMixer("chorus", v)} color="amber" />
        </div>
      </div>
      <div className="h-px bg-orange-500/[0.06]" />
      <div>
        <p className="text-[10px] font-semibold text-orange-400/40 uppercase tracking-[0.15em] mb-3">Dynamics</p>
        <div className="flex flex-col gap-4">
          <MixerSlider icon={<IconDistortion className="w-3.5 h-3.5" />} label="Distortion" value={mixer.distortion} onChange={(v) => updateMixer("distortion", v)} color="rose" />
          <MixerSlider icon={<IconCompressor className="w-3.5 h-3.5" />} label="Compressor" value={mixer.compressor} onChange={(v) => updateMixer("compressor", v)} color="orange" />
        </div>
      </div>
      <button
        onClick={resetMixer}
        className="text-[11px] text-zinc-600 hover:text-orange-400 transition-colors cursor-pointer py-2 px-3 rounded-lg border border-orange-500/[0.08] hover:bg-orange-500/[0.05] text-center mt-1"
      >
        Reset Mixer
      </button>
    </div>
  );
}

// ─── Responsive key sizing hook ─────────────────────────────────────
function useKeySize() {
  const [size, setSize] = useState({ keyW: 52, gap: 2, blackW: 30, blackH: 130 });

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) {
        setSize({ keyW: 36, gap: 1, blackW: 22, blackH: 88 });
      } else if (w < 1024) {
        setSize({ keyW: 44, gap: 2, blackW: 26, blackH: 108 });
      } else {
        setSize({ keyW: 52, gap: 2, blackW: 30, blackH: 130 });
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

// ─── Main component ─────────────────────────────────────────────────
export default function Home() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());
  const [instrument, setInstrument] = useState("piano");
  const [octave, setOctave] = useState(4);
  const [mixer, setMixer] = useState<MixerState>(DEFAULT_MIXER);
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const keySize = useKeySize();

  const instrumentRef = useRef(instrument);
  const octaveRef = useRef(octave);
  const mixerRef = useRef(mixer);

  useEffect(() => { instrumentRef.current = instrument; }, [instrument]);
  useEffect(() => { octaveRef.current = octave; }, [octave]);
  useEffect(() => { mixerRef.current = mixer; }, [mixer]);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
    return audioCtxRef.current;
  }, []);

  const playNote = useCallback(
    (semitone: number) => {
      const ctx = getAudioContext();
      const m = mixerRef.current;
      const freq = getFrequency(semitone, octaveRef.current);

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(m.volume / 100, ctx.currentTime);
      let currentNode: AudioNode = masterGain;

      if (m.distortion > 0) {
        const ws = ctx.createWaveShaper();
        const amount = m.distortion * 4;
        const curve = new Float32Array(44100);
        for (let i = 0; i < 44100; i++) {
          const x = (i * 2) / 44100 - 1;
          curve[i] = ((3 + amount) * x * 20 * (Math.PI / 180)) / (Math.PI + amount * Math.abs(x));
        }
        ws.curve = curve; ws.oversample = "4x";
        currentNode.connect(ws); currentNode = ws;
      }
      if (m.compressor > 0) {
        const comp = ctx.createDynamicsCompressor();
        comp.threshold.setValueAtTime(-50 + m.compressor * 0.4, ctx.currentTime);
        comp.knee.setValueAtTime(10, ctx.currentTime);
        comp.ratio.setValueAtTime(4 + (m.compressor / 100) * 16, ctx.currentTime);
        comp.attack.setValueAtTime(0.003, ctx.currentTime);
        comp.release.setValueAtTime(0.1 + (m.compressor / 100) * 0.15, ctx.currentTime);
        currentNode.connect(comp); currentNode = comp;
      }

      const dryGain = ctx.createGain();
      dryGain.gain.setValueAtTime(1, ctx.currentTime);
      currentNode.connect(dryGain); dryGain.connect(ctx.destination);

      if (m.reverb > 0) {
        const conv = ctx.createConvolver();
        conv.buffer = createReverbImpulse(ctx, 1 + (m.reverb / 100) * 3, 2.5);
        const rg = ctx.createGain();
        rg.gain.setValueAtTime(m.reverb / 100, ctx.currentTime);
        currentNode.connect(conv); conv.connect(rg); rg.connect(ctx.destination);
      }
      if (m.delay > 0) {
        const dn = ctx.createDelay(2.0);
        dn.delayTime.setValueAtTime(0.1 + (m.delayTime / 100) * 0.6, ctx.currentTime);
        const fb = ctx.createGain();
        fb.gain.setValueAtTime(Math.min(m.delay / 100, 0.85), ctx.currentTime);
        const dw = ctx.createGain();
        dw.gain.setValueAtTime(m.delay / 100, ctx.currentTime);
        currentNode.connect(dn); dn.connect(fb); fb.connect(dn);
        dn.connect(dw); dw.connect(ctx.destination);
      }
      if (m.chorus > 0) {
        const cg = ctx.createGain();
        cg.gain.setValueAtTime((m.chorus / 100) * 0.5, ctx.currentTime);
        const cd = ctx.createDelay(0.1);
        const lfo = ctx.createOscillator(), lg = ctx.createGain();
        lfo.type = "sine";
        lfo.frequency.setValueAtTime(0.5 + (m.chorus / 100) * 3, ctx.currentTime);
        lg.gain.setValueAtTime(0.002 + (m.chorus / 100) * 0.008, ctx.currentTime);
        lfo.connect(lg); lg.connect(cd.delayTime);
        cd.delayTime.setValueAtTime(0.015, ctx.currentTime);
        currentNode.connect(cd); cd.connect(cg); cg.connect(ctx.destination);
        lfo.start(ctx.currentTime); lfo.stop(ctx.currentTime + 4);
      }

      createInstrumentOscillators(ctx, freq, instrumentRef.current, masterGain);
    },
    [getAudioContext]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.repeat) return;
      if (e.key.toLowerCase() === "z") { setOctave((p) => Math.max(1, p - 1)); return; }
      if (e.key.toLowerCase() === "x") { setOctave((p) => Math.min(7, p + 1)); return; }
      const note = BASE_NOTES.find((n) => n.key === e.key.toLowerCase());
      if (note) {
        const label = getNoteLabel(note.note, octaveRef.current);
        setActiveKeys((prev) => new Set(prev).add(label));
        playNote(note.semitone);
      }
    },
    [playNote]
  );

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    const note = BASE_NOTES.find((n) => n.key === e.key.toLowerCase());
    if (note) {
      const label = getNoteLabel(note.note, octaveRef.current);
      setActiveKeys((prev) => { const n = new Set(prev); n.delete(label); return n; });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => { window.removeEventListener("keydown", handleKeyDown); window.removeEventListener("keyup", handleKeyUp); };
  }, [handleKeyDown, handleKeyUp]);

  const whiteKeys = BASE_NOTES.filter((n) => n.type === "white");
  const blackKeys = BASE_NOTES.filter((n) => n.type === "black");

  const getBlackKeyOffset = (note: string): number => {
    const p: Record<string, number> = { "C#": 0, "D#": 1, "F#": 3, "G#": 4, "A#": 5, "C#+": 7, "D#+": 8, "F#+": 10 };
    return p[note] ?? 0;
  };

  const categories = INSTRUMENTS.reduce<Record<string, Instrument[]>>((acc, inst) => {
    if (!acc[inst.category]) acc[inst.category] = [];
    acc[inst.category].push(inst);
    return acc;
  }, {});

  const updateMixer = (key: keyof MixerState, value: number) => setMixer((p) => ({ ...p, [key]: value }));
  const currentInstrument = INSTRUMENTS.find((i) => i.id === instrument);

  // Close drawers when clicking overlay
  const closeAll = () => { setLeftOpen(false); setRightOpen(false); };

  return (
    <div className="flex min-h-screen min-h-[100dvh] bg-[#0a0a0c] text-white overflow-hidden relative">

      {/* ── Mobile overlay ── */}
      {(leftOpen || rightOpen) && (
        <div className="fixed inset-0 bg-black/60 z-30 lg:hidden" onClick={closeAll} />
      )}

      {/* ── Mobile top bar ── */}
      <div className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-orange-500/[0.08] lg:hidden">
        <button onClick={() => { setLeftOpen(!leftOpen); setRightOpen(false); }} className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center cursor-pointer">
          {leftOpen ? <IconX className="w-4 h-4 text-zinc-400" /> : <IconPiano className="w-4 h-4 text-orange-400" />}
        </button>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
            <IconPiano className="w-3 h-3 text-white" />
          </div>
          <span className="text-sm font-bold tracking-tight">WEBANO</span>
        </div>
        <button onClick={() => { setRightOpen(!rightOpen); setLeftOpen(false); }} className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center cursor-pointer">
          {rightOpen ? <IconX className="w-4 h-4 text-zinc-400" /> : <IconMixer className="w-4 h-4 text-orange-400" />}
        </button>
      </div>

      {/* ── Left Sidebar / Drawer ── */}
      <aside className={`
        fixed top-0 left-0 bottom-0 w-64 z-40 flex flex-col border-r border-orange-500/[0.08] bg-[#0e0e11]
        transition-transform duration-300 ease-in-out
        lg:relative lg:w-56 lg:translate-x-0 lg:z-0
        ${leftOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        {/* Brand — desktop */}
        <div className="px-5 pt-6 pb-4 border-b border-orange-500/[0.08] hidden lg:block">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
              <IconPiano className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight">WEBANO</h1>
              <p className="text-[10px] text-zinc-600">Virtual Instrument</p>
            </div>
          </div>
        </div>

        {/* Mobile drawer header */}
        <div className="px-5 pt-5 pb-3 flex items-center justify-between lg:hidden">
          <span className="text-sm font-bold">Instruments</span>
          <button onClick={() => setLeftOpen(false)} className="w-7 h-7 rounded-md bg-white/[0.05] flex items-center justify-center cursor-pointer">
            <IconX className="w-3.5 h-3.5 text-zinc-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          <InstrumentPanel instrument={instrument} setInstrument={(id) => { setInstrument(id); setLeftOpen(false); }} categories={categories} />
        </div>

        {/* Keyboard hints — desktop only */}
        <div className="px-4 py-4 border-t border-orange-500/[0.08] hidden lg:block">
          <p className="text-[10px] text-zinc-700 leading-relaxed">
            <span className="text-zinc-500">White</span> Q W E R T Y U I O P [ ]
          </p>
          <p className="text-[10px] text-zinc-700 leading-relaxed">
            <span className="text-zinc-500">Black</span> 2 3 5 6 7 9 0 =
          </p>
          <p className="text-[10px] text-zinc-700 leading-relaxed mt-0.5">
            <span className="text-zinc-500">Octave</span> Z ↓ &nbsp; X ↑
          </p>
        </div>
      </aside>

      {/* ── Center: Piano ── */}
      <main className="flex-1 flex flex-col items-center justify-center relative pt-16 pb-6 lg:pt-0 lg:pb-0 overflow-y-auto">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] lg:w-[800px] lg:h-[500px] bg-orange-500/[0.03] rounded-full blur-[100px]" />
        </div>

        {/* Header */}
        <div className="relative text-center mb-4 lg:mb-6">
          <h2 className="text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-orange-200 via-white to-orange-200 bg-clip-text text-transparent">
            WEBANO
          </h2>
          <p className="text-zinc-600 text-[11px] lg:text-xs mt-1 flex items-center justify-center gap-1.5">
            <span className="text-orange-400/60">{currentInstrument?.icon}</span>
            {currentInstrument?.name} · Octave {octave}
          </p>
        </div>

        {/* Octave control */}
        <div className="relative flex items-center gap-1 lg:gap-1.5 mb-5 lg:mb-8">
          <button
            onClick={() => setOctave((p) => Math.max(1, p - 1))}
            disabled={octave <= 1}
            className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-500 flex items-center justify-center
              hover:bg-white/[0.08] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer text-sm"
          >
            ‹
          </button>
          {[1, 2, 3, 4, 5, 6, 7].map((o) => (
            <button
              key={o}
              onClick={() => setOctave(o)}
              className={`w-7 h-7 lg:w-8 lg:h-8 rounded-lg text-[10px] lg:text-[11px] font-semibold transition-all cursor-pointer ${
                octave === o
                  ? "bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 border border-orange-400/30"
                  : "bg-white/[0.03] border border-white/[0.05] text-zinc-600 hover:bg-white/[0.06] hover:text-zinc-400"
              }`}
            >
              {o}
            </button>
          ))}
          <button
            onClick={() => setOctave((p) => Math.min(7, p + 1))}
            disabled={octave >= 7}
            className="w-7 h-7 lg:w-8 lg:h-8 rounded-lg bg-white/[0.04] border border-white/[0.06] text-zinc-500 flex items-center justify-center
              hover:bg-white/[0.08] hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all cursor-pointer text-sm"
          >
            ›
          </button>
        </div>

        {/* Piano — horizontally scrollable on small screens */}
        <div className="w-full overflow-x-auto px-4 flex justify-center">
          <div className="relative select-none shrink-0">
            {/* Piano body */}
            <div className="absolute -inset-3 lg:-inset-4 -bottom-4 lg:-bottom-6 rounded-xl lg:rounded-2xl bg-gradient-to-b from-[#18181b] to-[#111113] border border-white/[0.04] shadow-2xl shadow-black/60 -z-10" />

            {/* White keys */}
            <div className="flex gap-[1px] sm:gap-[2px]">
              {whiteKeys.map((note) => {
                const label = getNoteLabel(note.note, octave);
                const isPressed = activeKeys.has(label);
                return (
                  <button
                    key={note.note}
                    onMouseDown={() => { setActiveKeys((p) => new Set(p).add(label)); playNote(note.semitone); }}
                    onMouseUp={() => { setActiveKeys((p) => { const n = new Set(p); n.delete(label); return n; }); }}
                    onMouseLeave={() => { setActiveKeys((p) => { const n = new Set(p); n.delete(label); return n; }); }}
                    onTouchStart={(e) => { e.preventDefault(); setActiveKeys((p) => new Set(p).add(label)); playNote(note.semitone); }}
                    onTouchEnd={() => { setActiveKeys((p) => { const n = new Set(p); n.delete(label); return n; }); }}
                    className={`relative w-[36px] h-36 sm:w-[44px] sm:h-44 lg:w-[52px] lg:h-52 rounded-b-md lg:rounded-b-lg flex flex-col items-center justify-end pb-2 lg:pb-3 transition-all duration-75 cursor-pointer touch-none ${
                      isPressed
                        ? "bg-gradient-to-b from-orange-100 to-orange-200/80 translate-y-[1px]"
                        : "bg-gradient-to-b from-[#f5f5f0] to-[#e8e8e3] hover:from-[#eeeeea] hover:to-[#e0e0db]"
                    }`}
                    style={{
                      boxShadow: isPressed
                        ? "inset 0 2px 8px rgba(234,88,12,0.15), inset 0 1px 3px rgba(0,0,0,0.1)"
                        : "0 4px 8px rgba(0,0,0,0.4), inset 0 -2px 0 rgba(0,0,0,0.04)",
                    }}
                  >
                    <span className={`text-[8px] sm:text-[9px] lg:text-[10px] font-semibold transition-colors ${
                      isPressed ? "text-orange-500" : "text-zinc-400"
                    }`}>
                      {note.key.toUpperCase()}
                    </span>
                    <span className="text-[7px] sm:text-[8px] text-zinc-400/60 mt-0.5 font-medium hidden sm:block">{label}</span>
                  </button>
                );
              })}
            </div>

            {/* Black keys */}
            <div className="absolute top-0 left-0 pointer-events-none">
              {blackKeys.map((note) => {
                const label = getNoteLabel(note.note, octave);
                const isPressed = activeKeys.has(label);
                const offset = getBlackKeyOffset(note.note);
                const leftPos = offset * (keySize.keyW + keySize.gap) + keySize.keyW * 0.67;
                return (
                  <button
                    key={note.note}
                    onMouseDown={() => { setActiveKeys((p) => new Set(p).add(label)); playNote(note.semitone); }}
                    onMouseUp={() => { setActiveKeys((p) => { const n = new Set(p); n.delete(label); return n; }); }}
                    onMouseLeave={() => { setActiveKeys((p) => { const n = new Set(p); n.delete(label); return n; }); }}
                    onTouchStart={(e) => { e.preventDefault(); setActiveKeys((p) => new Set(p).add(label)); playNote(note.semitone); }}
                    onTouchEnd={() => { setActiveKeys((p) => { const n = new Set(p); n.delete(label); return n; }); }}
                    className={`absolute pointer-events-auto rounded-b-sm sm:rounded-b-md touch-none
                      flex flex-col items-center justify-end pb-1.5 lg:pb-2 transition-all duration-75 cursor-pointer z-10 ${
                      isPressed
                        ? "bg-gradient-to-b from-[#3a3a3f] to-[#2a2a2f] translate-y-[1px]"
                        : "bg-gradient-to-b from-[#2a2a2f] to-[#1a1a1e] hover:from-[#333338] hover:to-[#252528]"
                    }`}
                    style={{
                      left: `${leftPos}px`,
                      width: `${keySize.blackW}px`,
                      height: `${keySize.blackH}px`,
                      boxShadow: isPressed
                        ? "inset 0 2px 4px rgba(0,0,0,0.5)"
                        : "0 4px 8px rgba(0,0,0,0.6), inset 0 -1px 0 rgba(255,255,255,0.04)",
                    }}
                  >
                    <span className={`text-[7px] sm:text-[8px] lg:text-[9px] font-semibold transition-colors ${
                      isPressed ? "text-orange-400" : "text-zinc-600"
                    }`}>
                      {note.key.toUpperCase()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Credits */}
        <p className="text-zinc-700 mt-6 lg:mt-10 text-[10px] lg:text-[11px] tracking-wide">
          made by <span className="text-orange-400/50">@saransriniv</span>
          <span className="mx-2 text-zinc-800">·</span>
          <span className="text-orange-400/50">nearcult</span>
        </p>
      </main>

      {/* ── Right Sidebar / Drawer ── */}
      <aside className={`
        fixed top-0 right-0 bottom-0 w-72 z-40 flex flex-col border-l border-orange-500/[0.08] bg-[#0e0e11]
        transition-transform duration-300 ease-in-out
        lg:relative lg:w-60 lg:translate-x-0 lg:z-0
        ${rightOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        {/* Mixer header */}
        <div className="px-5 pt-6 pb-4 border-b border-orange-500/[0.08]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500/80 to-amber-600/80 flex items-center justify-center shadow-lg shadow-orange-500/15">
                <IconMixer className="w-3.5 h-3.5 text-white" />
              </div>
              <h2 className="text-sm font-semibold tracking-tight">Mixer</h2>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMixer(DEFAULT_MIXER)}
                className="text-[10px] text-zinc-600 hover:text-orange-400 transition-colors cursor-pointer px-2 py-1 rounded-md hover:bg-orange-500/[0.06]"
              >
                Reset
              </button>
              <button onClick={() => setRightOpen(false)} className="w-7 h-7 rounded-md bg-white/[0.05] flex items-center justify-center cursor-pointer lg:hidden">
                <IconX className="w-3.5 h-3.5 text-zinc-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-5">
          <MixerPanel mixer={mixer} updateMixer={updateMixer} resetMixer={() => setMixer(DEFAULT_MIXER)} />
        </div>

        {/* Volume meter footer */}
        <div className="px-4 py-3 border-t border-orange-500/[0.08]">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1 rounded-full bg-zinc-800/80 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-150"
                style={{ width: `${mixer.volume}%` }}
              />
            </div>
            <span className="text-[10px] text-zinc-600 tabular-nums font-mono w-8 text-right">
              {mixer.volume}%
            </span>
          </div>
        </div>
      </aside>
    </div>
  );
}
