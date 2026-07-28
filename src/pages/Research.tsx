import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { cancerGenes } from "@/data/cancerData";
import { Search, ExternalLink, Dna, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Research = () => {
  const [searchParams] = useSearchParams();
  const initialQ = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQ);
  const [papers, setPapers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const filteredGenes = useMemo(() => {
    if (!query) return cancerGenes;
    return cancerGenes.filter(
      (g) =>
        g.name.toLowerCase().includes(query.toLowerCase()) ||
        g.cancers.some((c) => c.toLowerCase().includes(query.toLowerCase()))
    );
  }, [query]);

  const searchPubMed = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setSearched(true);
    try {
      const searchRes = await fetch(
        `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(query + " cancer")}&retmax=6&retmode=json`
      );
      const searchData = await searchRes.json();
      const ids = searchData.esearchresult?.idlist || [];
      if (ids.length > 0) {
        const summaryRes = await fetch(
          `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids.join(",")}&retmode=json`
        );
        const summaryData = await summaryRes.json();
        const results = ids.map((id: string) => {
          const article = summaryData.result?.[id];
          return {
            id,
            title: article?.title || "Untitled",
            authors: article?.authors?.slice(0, 3).map((a: any) => a.name).join(", ") || "Unknown",
            journal: article?.fulljournalname || article?.source || "Unknown",
            year: article?.pubdate?.split(" ")[0] || "N/A",
            link: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
          };
        });
        setPapers(results);
      } else {
        setPapers([]);
      }
    } catch {
      setPapers([]);
    }
    setLoading(false);
  };

  return (
    <main className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-3">Cancer Research</h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Search cancer-related genes and find latest research papers from PubMed.
          </p>
          <div className="max-w-lg mx-auto flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by gene name or cancer type..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && searchPubMed()}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <Button onClick={searchPubMed} disabled={loading} className="px-6">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search PubMed"}
            </Button>
          </div>
        </div>

        {/* Genes */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Dna className="h-5 w-5 text-primary" />
            <h2 className="font-heading text-xl font-bold text-foreground">Cancer-Related Genes</h2>
          </div>
          {filteredGenes.length === 0 ? (
            <p className="text-muted-foreground text-sm">No genes found matching your search.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredGenes.map((gene) => (
                <div key={gene.name} className="bg-card rounded-xl border border-border p-5 hover-lift">
                  <h3 className="font-heading font-bold text-lg text-primary mb-1">{gene.name}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{gene.function}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {gene.cancers.map((c) => (
                      <span key={c} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">{c}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={gene.ncbiLink} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-1">
                      NCBI <ExternalLink className="h-3 w-3" />
                    </a>
                    <a href={`https://www.ensembl.org/Homo_sapiens/Gene/Summary?g=${gene.name}`} target="_blank" rel="noopener noreferrer" className="text-xs text-primary hover:underline inline-flex items-center gap-1">
                      Ensembl <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Papers */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <FileText className="h-5 w-5 text-primary" />
            <h2 className="font-heading text-xl font-bold text-foreground">Research Papers</h2>
          </div>
          {loading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-card rounded-xl border border-border p-5 animate-pulse">
                  <div className="h-4 bg-muted rounded w-3/4 mb-3" />
                  <div className="h-3 bg-muted rounded w-1/2 mb-2" />
                  <div className="h-3 bg-muted rounded w-1/3" />
                </div>
              ))}
            </div>
          ) : !searched ? (
            <p className="text-muted-foreground text-sm text-center py-8">
              Enter a search term and click "Search PubMed" to find research papers.
            </p>
          ) : papers.length === 0 ? (
            <p className="text-muted-foreground text-sm text-center py-8">No papers found. Try a different search term.</p>
          ) : (
            <div className="space-y-4">
              {papers.map((paper) => (
                <a
                  key={paper.id}
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-card rounded-xl border border-border p-5 hover-lift group"
                >
                  <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors mb-2 text-sm leading-relaxed">
                    {paper.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-1">{paper.authors}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="text-primary">{paper.journal}</span>
                    <span>•</span>
                    <span>{paper.year}</span>
                    <ExternalLink className="h-3 w-3 ml-auto text-primary" />
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Research;
