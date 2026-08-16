function searchProducts(term){term=term.trim().toLowerCase();if(!term)return products;return products.filter(p=>[p.name,p.category,p.description,p.marketplace,...(p.tags||[])].join(" ").toLowerCase().includes(term))}
function initSearch(){
 const input=$("#page-search"),btn=$("#page-search-btn"),out=$("#search-results"),summary=$("#search-summary");
 const run=()=>{const term=input.value;const result=searchProducts(term);summary.textContent=term?`Search results for: ${term} — ${result.length} products found`:"Search by product, category or keyword.";renderProducts(result,out)};
 btn?.addEventListener("click",run);input?.addEventListener("keydown",e=>{if(e.key==="Enter")run()});const q=new URLSearchParams(location.search).get("q");if(q){input.value=q;run()}else run();
}
