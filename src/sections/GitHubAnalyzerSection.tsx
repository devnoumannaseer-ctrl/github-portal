import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Github,
  Star,
  GitFork,
  BookOpen,
  Users,
  Calendar,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  FileCode2,
} from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
  topics?: string[];
}

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
  location: string | null;
  blog: string | null;
  company: string | null;
}

interface GitHubAnalyzerSectionProps {
  currentUsername: string;
  onUsernameChange: (username: string) => void;
  onOpenReadmeBuilderWithUser?: (username: string) => void;
}

const LANGUAGE_COLORS: Record<string, string> = {
  'C++': '#f34b7d',
  'C': '#555555',
  'Python': '#3572A5',
  'Java': '#b07219',
  'JavaScript': '#f1e05a',
  'TypeScript': '#3178c6',
  'HTML': '#e34c26',
  'CSS': '#563d7c',
  'Shell': '#89e051',
  'PHP': '#4F5D95',
  'Rust': '#dea584',
  'Go': '#00ADD8',
};

export const GitHubAnalyzerSection: React.FC<GitHubAnalyzerSectionProps> = ({
  currentUsername,
  onUsernameChange,
  onOpenReadmeBuilderWithUser,
}) => {
  const [searchInput, setSearchInput] = useState(currentUsername || 'devnoumannaseer-ctrl');
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'stars' | 'updated'>('stars');

  const fetchGitHubData = async (usernameToFetch: string) => {
    if (!usernameToFetch.trim()) return;
    setLoading(true);
    setError(null);

    try {
      // Fetch user profile
      const userRes = await fetch(`https://api.github.com/users/${usernameToFetch.trim()}`);
      if (!userRes.ok) {
        if (userRes.status === 404) {
          throw new Error(`GitHub user "${usernameToFetch}" not found.`);
        }
        if (userRes.status === 403) {
          throw new Error('GitHub API rate limit exceeded. Please try again shortly or inspect cached workspace data.');
        }
        throw new Error('Failed to load GitHub user data.');
      }
      const userData: GitHubUser = await userRes.json();
      setUser(userData);
      onUsernameChange(userData.login);

      // Fetch user public repos
      const reposRes = await fetch(
        `https://api.github.com/users/${usernameToFetch.trim()}/repos?per_page=100&sort=updated`
      );
      if (reposRes.ok) {
        const reposData: GitHubRepo[] = await reposRes.json();
        setRepos(reposData.filter((r) => !r.fork)); // Filter original repos
      }
    } catch (err: any) {
      setError(err.message || 'Error connecting to GitHub API');
      // If error occurs on devnoumannaseer-ctrl, provide high-quality fallback demo
      if (usernameToFetch.toLowerCase().includes('nouman') || usernameToFetch.toLowerCase().includes('nauman')) {
        setUser({
          login: 'devnoumannaseer-ctrl',
          name: 'Nauman Naseer',
          avatar_url: '/my-pic.jpg',
          bio: 'Computer Science undergraduate passionate about core computing, systems programming, algorithmic problem-solving, and building practical software solutions.',
          public_repos: 12,
          followers: 24,
          following: 18,
          created_at: '2023-09-15T00:00:00Z',
          html_url: 'https://github.com/devnoumannaseer-ctrl',
          location: 'Pakistan',
          blog: 'https://portfolio-nauman-naseer.vercel.app',
          company: 'CS Studies',
        });
        setRepos([
          {
            id: 1,
            name: 'Interactive-Algorithm-Visualizer',
            description: 'Real-time simulation of Dijkstra, A*, and sorting algorithms with adjustable speed and custom obstacles.',
            html_url: 'https://github.com/devnoumannaseer-ctrl',
            stargazers_count: 14,
            forks_count: 5,
            language: 'TypeScript',
            updated_at: '2026-11-14T10:00:00Z',
            fork: false,
            topics: ['algorithms', 'visualizer', 'dijkstra', 'react'],
          },
          {
            id: 2,
            name: 'CPP-Student-Management-System',
            description: 'Object-oriented academic management engine in C++ with dynamic memory, binary file streams, and GPA analytics.',
            html_url: 'https://github.com/devnoumannaseer-ctrl',
            stargazers_count: 11,
            forks_count: 3,
            language: 'C++',
            updated_at: '2026-11-10T12:00:00Z',
            fork: false,
            topics: ['cpp', 'oop', 'file-io', 'data-structures'],
          },
          {
            id: 3,
            name: 'Python-Automation-Toolkit',
            description: 'Batch file restructuring, data cleaning, automated reporting, and anomaly detection utilities.',
            html_url: 'https://github.com/devnoumannaseer-ctrl',
            stargazers_count: 9,
            forks_count: 2,
            language: 'Python',
            updated_at: '2026-11-05T09:00:00Z',
            fork: false,
            topics: ['python', 'automation', 'csv-parsing'],
          },
          {
            id: 4,
            name: 'Developer-Visibility-Portfolio',
            description: 'GitHance-engineered modern developer workspace with live GitHub analyzer, README builder, and bento showcase.',
            html_url: 'https://github.com/devnoumannaseer-ctrl',
            stargazers_count: 18,
            forks_count: 6,
            language: 'TypeScript',
            updated_at: '2026-11-17T08:00:00Z',
            fork: false,
            topics: ['portfolio', 'githance', 'tailwind', 'react'],
          },
        ]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData(currentUsername || 'devnoumannaseer-ctrl');
  }, []);

  // Compute language breakdown
  const languageStats = React.useMemo(() => {
    const counts: Record<string, number> = {};
    let total = 0;
    repos.forEach((repo) => {
      if (repo.language) {
        counts[repo.language] = (counts[repo.language] || 0) + 1;
        total += 1;
      }
    });

    if (total === 0) return [];

    return Object.entries(counts)
      .map(([lang, count]) => ({
        language: lang,
        count,
        percentage: Math.round((count / total) * 100),
        color: LANGUAGE_COLORS[lang] || '#a855f7',
      }))
      .sort((a, b) => b.count - a.count);
  }, [repos]);

  // Aggregate stats
  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
  const totalForks = repos.reduce((acc, r) => acc + r.forks_count, 0);
  const availableLanguages = ['All', ...new Set(repos.map((r) => r.language).filter(Boolean) as string[])];

  // Filter & sort repos
  const filteredRepos = repos
    .filter((repo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesLang = selectedLanguage === 'All' || repo.language === selectedLanguage;
      return matchesSearch && matchesLang;
    })
    .sort((a, b) => {
      if (sortBy === 'stars') return b.stargazers_count - a.stargazers_count;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchGitHubData(searchInput);
  };

  return (
    <section id="analyzer" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 pb-8 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff7a1a]/30 bg-[#ff7a1a]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#ffb37f]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#ff7a1a]" />
            <span>Live Workspace Intelligence</span>
          </div>
          <h2 className="mt-3 font-antonio text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl lg:text-5xl">
            GitHub Profile &amp; Repository Analyzer
          </h2>
          <p className="mt-2 max-w-2xl font-poppins text-sm leading-6 text-white/60 sm:text-base">
            Scan public repositories, compute live language distributions, verify commit signals, and explore codebase
            architecture in real time.
          </p>
        </div>

        {/* Search input form */}
        <form onSubmit={handleSearchSubmit} className="flex w-full items-center gap-2 sm:w-auto">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Enter GitHub username..."
              className="w-full rounded-full border border-white/15 bg-white/5 py-2.5 pl-10 pr-4 text-xs font-mono text-white placeholder:text-white/30 focus:border-[#ff7a1a] focus:outline-none focus:ring-1 focus:ring-[#ff7a1a]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-1.5 rounded-full bg-[#ff7a1a] px-5 py-2.5 text-xs font-bold text-black shadow-[0_0_20px_rgba(255,122,26,0.35)] transition-all hover:bg-[#ff8c3a] disabled:opacity-50"
          >
            {loading ? <RefreshCw className="h-3.5 w-3.5 animate-spin" /> : <Search className="h-3.5 w-3.5 stroke-[2.5]" />}
            <span>{loading ? 'Scanning...' : 'Analyze'}</span>
          </button>
        </form>
      </div>

      {error && (
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-xs text-red-300">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
          <p>{error}</p>
        </div>
      )}

      {user && (
        <div className="mt-8 space-y-8">
          {/* User overview banner card */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#101216] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.4)] sm:p-8">
            <div className="pointer-events-none absolute -right-4 top-2 text-[100px] font-bold leading-none text-white/[0.02]">
              GITHUB
            </div>

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Avatar + Info */}
              <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="h-20 w-20 rounded-2xl border-2 border-[#ff7a1a]/40 object-cover shadow-[0_0_25px_rgba(255,122,26,0.25)]"
                />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-antonio text-3xl font-bold tracking-wide text-white">
                      {user.name || user.login}
                    </h3>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-xs font-mono text-[#53d0ff] hover:bg-white/10"
                    >
                      @{user.login}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <p className="mt-2 max-w-2xl font-poppins text-xs sm:text-sm leading-6 text-white/70">
                    {user.bio || 'Developer exploring software architecture and computational solutions.'}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-white/50">
                    {user.location && <span>📍 {user.location}</span>}
                    {user.created_at && (
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        Joined {new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenReadmeBuilderWithUser) onOpenReadmeBuilderWithUser(user.login);
                    const el = document.getElementById('readme-builder');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff7a1a] px-5 py-2.5 text-xs font-bold text-black shadow-[0_0_25px_rgba(255,122,26,0.4)] transition-all hover:bg-[#ff8c3a]"
                >
                  <FileCode2 className="h-3.5 w-3.5 stroke-[2.5]" />
                  <span>Generate README for @{user.login}</span>
                </button>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white/80 transition-all hover:bg-white/10 hover:text-white"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">Public Repos</p>
                <p className="mt-1 font-antonio text-3xl font-bold text-white">{user.public_repos}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">Total Stars</p>
                <p className="mt-1 font-antonio text-3xl font-bold text-[#ffdd00]">{totalStars}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">Followers</p>
                <p className="mt-1 font-antonio text-3xl font-bold text-[#53d0ff]">{user.followers}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">Total Forks</p>
                <p className="mt-1 font-antonio text-3xl font-bold text-[#10b981]">{totalForks}</p>
              </div>
            </div>

            {/* Calculated Language Distribution Bar */}
            {languageStats.length > 0 && (
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-5">
                <div className="flex items-center justify-between pb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60">
                    Live Language Distribution
                  </span>
                  <span className="text-[11px] font-mono text-[#ffb37f]">
                    Top: {languageStats[0].language} ({languageStats[0].percentage}%)
                  </span>
                </div>

                {/* Multi-segment progress bar */}
                <div className="flex h-3 w-full overflow-hidden rounded-full bg-white/10">
                  {languageStats.map((stat) => (
                    <div
                      key={stat.language}
                      style={{ width: `${stat.percentage}%`, backgroundColor: stat.color }}
                      className="h-full transition-all duration-500"
                      title={`${stat.language}: ${stat.percentage}%`}
                    />
                  ))}
                </div>

                {/* Legend badges */}
                <div className="mt-4 flex flex-wrap gap-4 text-xs font-mono">
                  {languageStats.map((stat) => (
                    <div key={stat.language} className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: stat.color }} />
                      <span className="text-white/80">{stat.language}</span>
                      <span className="text-white/40">{stat.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Repositories Explorer */}
          <div className="rounded-[32px] border border-white/10 bg-[#101216] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:p-8">
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-antonio text-2xl font-bold uppercase tracking-wide text-white">
                  Repository Explorer ({filteredRepos.length})
                </h3>
                <p className="text-xs text-white/50">
                  Inspecting repositories belonging to @{user.login}
                </p>
              </div>

              {/* Controls: Search, Language Filter, Sort */}
              <div className="flex flex-wrap items-center gap-2.5">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by name..."
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white placeholder:text-white/30 focus:border-[#ff7a1a] focus:outline-none"
                />

                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="rounded-xl border border-white/15 bg-[#15181f] px-3 py-1.5 text-xs text-white focus:border-[#ff7a1a] focus:outline-none"
                >
                  {availableLanguages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>

                <div className="flex rounded-xl border border-white/15 bg-white/5 p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setSortBy('stars')}
                    className={`rounded-lg px-2.5 py-1 font-medium transition-colors ${
                      sortBy === 'stars' ? 'bg-[#ff7a1a] text-black font-bold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Stars
                  </button>
                  <button
                    type="button"
                    onClick={() => setSortBy('updated')}
                    className={`rounded-lg px-2.5 py-1 font-medium transition-colors ${
                      sortBy === 'updated' ? 'bg-[#ff7a1a] text-black font-bold' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Recent
                  </button>
                </div>
              </div>
            </div>

            {/* Repos Grid */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {filteredRepos.length === 0 ? (
                <div className="col-span-full py-12 text-center text-xs text-white/40">
                  No repositories match your filter criteria.
                </div>
              ) : (
                filteredRepos.map((repo) => (
                  <div
                    key={repo.id}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.05]"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-antonio text-xl font-bold tracking-wide text-white hover:text-[#ff7a1a] transition-colors"
                        >
                          {repo.name}
                        </a>
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${repo.name}`}
                          className="text-white/40 hover:text-white transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>

                      <p className="mt-2.5 font-poppins text-xs leading-5 text-white/65 line-clamp-2">
                        {repo.description || 'Public repository focused on algorithms, software, and modular design.'}
                      </p>

                      {repo.topics && repo.topics.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {repo.topics.slice(0, 4).map((topic) => (
                            <span
                              key={topic}
                              className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-white/60 font-mono"
                            >
                              #{topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-white/50">
                      <div className="flex items-center gap-1.5">
                        {repo.language && (
                          <>
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || '#a855f7' }}
                            />
                            <span className="font-mono text-white/80">{repo.language}</span>
                          </>
                        )}
                      </div>

                      <div className="flex items-center gap-3 font-mono">
                        <span className="flex items-center gap-1 text-yellow-300">
                          <Star className="h-3.5 w-3.5 fill-yellow-300/30" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork className="h-3.5 w-3.5" />
                          {repo.forks_count}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
