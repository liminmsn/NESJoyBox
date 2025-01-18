export async function loadLocationFile(url: string) {
  const res = await fetch(url, { method: "GET" });
  if (res.ok && res.headers.get("content-type") !== "text/html") {
    return res;
  }
  return { ok: false, data: { info: "Error fetching the file!" } };
}

export async function getM3u() {
  const res = await loadLocationFile("/m3u/live_ok.m3u");
  console.log('yzt',res);
  if (res.ok && res instanceof Response) {
    const lines = (await res.text()).split("\n");
    const m3u_arr: M3uItem[] = [];

    for (let i = 0; i < lines.length; i++) {
      if (i % 2 === 0) {
        m3u_arr.push(
          new M3uItem(
            lines[i + 1],
            lines[i].replace(/#EXTINF:-1,|#EXTINF:-1/g, ""),
          ),
        );
      }
    }
    // console.log(m3u_arr);
    return m3u_arr;
  } else {
    return [];
  }
}

export class M3uItem {
  url: string;
  name: string;
  constructor(url: string, name: string) {
    this.url = url;
    this.name = name;
  }
}
