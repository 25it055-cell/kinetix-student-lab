import React, { useState } from "react";
import { MessageSquare, Flame, Send, User } from "lucide-react";

interface WallPost {
  id: string;
  author: string;
  university: string;
  roleBadge: string;
  content: string;
  category: string;
  likes: number;
  hasLiked?: boolean;
  timeAgo: string;
}

const INITIAL_WALL_POSTS: WallPost[] = [
  {
    id: "post-1",
    author: "Kavya S.",
    university: "UC Berkeley",
    roleBadge: "Dorm Rep",
    content: "We replaced our 3rd floor lounge beanbag with a chin-up bar and resistance band station. In 2 weeks, average daily study breaks increased by 30 mins of active pull-ups!",
    category: "Dorm Hacks",
    likes: 84,
    timeAgo: "2h ago",
  },
  {
    id: "post-2",
    author: "Tariq M.",
    university: "Carnegie Mellon",
    roleBadge: "CS Senior",
    content: "Open-sourcing our git-hook that blocks pushing code unless you've registered at least 2,000 steps since your last commit. Saved our dev team's lower backs during hackathon.",
    category: "Software Hack",
    likes: 129,
    timeAgo: "5h ago",
  },
  {
    id: "post-3",
    author: "Hannah W.",
    university: "Penn State",
    roleBadge: "Pre-Med",
    content: "Pro tip for textbook rucking: wrap 3 anatomy volumes in a soft hoodie before putting them in your backpack. Cushions the spine perfectly on the 1.2-mile walk to chemistry.",
    category: "Low-Cost Tip",
    likes: 67,
    timeAgo: "8h ago",
  },
  {
    id: "post-4",
    author: "Leo Gonzalez",
    university: "UT Austin",
    roleBadge: "Rec Sports Co-op",
    content: "We mapped the coolest shaded outdoor calisthenics routes on campus for hot afternoons. Scan the QR sticker by the turtle pond to join today's 5:30 PM push-up circle.",
    category: "Campus Route",
    likes: 92,
    timeAgo: "1d ago",
  },
];

export const InnovationWall: React.FC = () => {
  const [posts, setPosts] = useState<WallPost[]>(INITIAL_WALL_POSTS);
  const [newPostText, setNewPostText] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const toggleLike = (id: string) => {
    setPosts((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const liked = !p.hasLiked;
          return {
            ...p,
            hasLiked: liked,
            likes: liked ? p.likes + 1 : p.likes - 1,
          };
        }
        return p;
      })
    );
  };

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    const newPost: WallPost = {
      id: `post-${Date.now()}`,
      author: newAuthor.trim() || "Student Innovator",
      university: "Active Campus",
      roleBadge: "Community Voice",
      content: newPostText.trim(),
      category: "Dorm Hacks",
      likes: 1,
      hasLiked: true,
      timeAgo: "Just now",
    };

    setPosts([newPost, ...posts]);
    setNewPostText("");
    setNewAuthor("");
  };

  return (
    <section id="wall" className="py-20 relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono mb-3 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
            <span className="font-semibold text-slate-800">REAL STUDENT VOICES</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-5xl text-slate-900 tracking-tight">
            Student Innovation Wall
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-3 font-normal leading-relaxed">
            Unfiltered dorm room hacks, campus testing notes, and micro-habits shared by university peers across the country.
          </p>
        </div>

        {/* Quick Post Box */}
        <form
          onSubmit={handlePostSubmit}
          className="silver-card p-6 rounded-3xl border border-slate-200/90 max-w-2xl mx-auto mb-12 space-y-3 shadow-sm"
        >
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center font-mono font-bold text-xs shadow-xs">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              placeholder="Your name & university (e.g. Maya @ UCLA)..."
              className="flex-1 bg-slate-50 text-xs text-slate-900 placeholder-slate-400 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-sky-500 focus:bg-white shadow-xs transition-all"
            />
          </div>

          <textarea
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            placeholder="Share a dorm fitness hack, study-break trick, or feedback on a campus workout idea..."
            rows={2}
            className="w-full bg-slate-50 text-xs sm:text-sm text-slate-900 placeholder-slate-400 border border-slate-200 rounded-xl p-3.5 focus:outline-none focus:border-sky-500 focus:bg-white resize-none shadow-xs font-normal transition-all"
          />

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] font-mono text-slate-400">
              Community guidelines: Encouraging & fitness-positive
            </span>
            <button
              type="submit"
              disabled={!newPostText.trim()}
              className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-40 text-white font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 transition-all shadow-xs shadow-sky-600/20"
            >
              <Send className="w-3.5 h-3.5 text-white" />
              <span>Post Note</span>
            </button>
          </div>
        </form>

        {/* Wall Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="silver-card rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-slate-900">
                      {post.author}
                    </span>
                    <span className="text-slate-300 text-xs">•</span>
                    <span className="text-xs text-slate-500">
                      {post.university}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 font-semibold border border-sky-200">
                    {post.roleBadge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  "{post.content}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono text-[10px] text-slate-400">
                  {post.timeAgo}
                </span>

                <button
                  onClick={() => toggleLike(post.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg transition-all shadow-xs ${
                    post.hasLiked
                      ? "bg-sky-600 text-white font-bold shadow-sky-600/20"
                      : "bg-white text-slate-600 hover:text-sky-600 border border-slate-200"
                  }`}
                >
                  <Flame className={`w-3.5 h-3.5 ${post.hasLiked ? "text-white" : "text-sky-500"}`} />
                  <span className="font-bold text-xs">{post.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
