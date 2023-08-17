import { serve } from "https://deno.land/std@0.151.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.151.0/http/file_server.ts";

import quiz from "./quiz.json" assert {type: "json"};
import end from "./end.json" assert {type: "json"};

serve(async (req) => {
  const pathname = new URL(req.url).pathname;

  if (req.method === "GET" && pathname.startsWith("/quiz") ) {
    const queriedID = new URL(req.url).searchParams.get("id");
    console.log(queriedID);

    const res = JSON.stringify(quiz[queriedID]);
    console.log(res);

    return new Response(res ?? JSON.stringify({error: "E-001", messsage: "unknown quiz id."}));
  }

  if (req.method === "GET" && pathname.startsWith("/result") ) {
    const queriedID = new URL(req.url).searchParams.get("id");
    console.log(queriedID);

    const res = JSON.stringify(end[queriedID]);
    console.log(res);

    return new Response(res ?? JSON.stringify({error: "E-002", messsage: "unknown end id."}));
  }

  return serveDir(req, {
    fsRoot: "public",
    urlRoot: "",
    showDirListing: true,
    enableCors: true,
  });
});
