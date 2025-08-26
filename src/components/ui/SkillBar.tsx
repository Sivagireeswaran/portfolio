import React from 'react';
import { motion } from 'framer-motion';

export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface SkillProofLink {
  label: string;
  href: string;
}

export interface SkillBarProps {
  name: string;
  score: number; // 0-100
  level: SkillLevel;
  proofLinks?: SkillProofLink[];
  delay?: number;
}

const levelClasses: Record<SkillLevel, string> = {
  Beginner: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 dark:border dark:border-gray-500',
  Intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300 dark:border dark:border-blue-400/30',
  Advanced: 'bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-300 dark:border dark:border-amber-400/30',
  Expert: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border dark:border-emerald-400/30',
};

const SkillBar: React.FC<SkillBarProps> = ({ name, score, level, proofLinks, delay = 0 }) => {
  const clamped = Math.max(0, Math.min(100, score));

  return (
    <div className="group relative">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{name}</span>
        <span className={`text-[11px] px-2 py-0.5 rounded-full ${levelClasses[level]}`}>{level}</span>
      </div>
      <div className="h-3 w-full rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${clamped}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, delay }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-secondary-500 shadow-inner"
        />
      </div>
      <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">{clamped}%</div>

      {proofLinks && proofLinks.length > 0 && (
        <div className="absolute left-0 top-full mt-2 hidden group-hover:block z-20">
          <div className="min-w-[220px] max-w-xs bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-3">
            <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Proof points</div>
            <ul className="space-y-1">
              {proofLinks.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillBar;


