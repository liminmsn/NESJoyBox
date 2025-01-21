export class M3uItem {
  url: string;
  name: string;
  constructor(
    url: string,
    name: string,
    public books = false,
    public history = 0,
    public play = 0,
    public err = 0,
  ) {
    this.url = url;
    this.name = name;
  }
}

export async function loadLocationFile(url: string) {
  const res = await fetch(url, { method: "GET" });
  if (res.ok && res.headers.get("content-type") !== "text/html") {
    return res;
  }
  return { ok: false, data: { info: "Error fetching the file!" } };
}

async function getM3u() {
  const res = await loadLocationFile("/m3u/live_ok.m3u");
  if (res.ok && res instanceof Response) {
    const lines = (await res.text()).split("\n");
    const m3u_arr: M3uItem[] = [];

    for (let i = 0; i < lines.length; i++) {
      if (i % 2 === 0) {
        m3u_arr.push(
          new M3uItem(
            lines[i + 1].replace(/\r/i, ""),
            lines[i].replace(/#EXTINF:-1,|#EXTINF:-1/g, "").replace(/\r/i, ""),
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

export class UsrData {
  play_list: M3uItem[][] = [];
  play_histry: M3uItem[] = [];
  static setPlayList(list: M3uItem[][]) {
    const obj = new UsrData();
    obj.play_list = list;
    return obj;
  }
}

export const storage = {
  async init() {
    if (this.getUsr() == null) {
      const res = await getM3u();
      const grid = 3;
      const grid_arr = [] as any[];
      for (let i = 0; i < res.length; i += grid) {
        grid_arr.push(res.slice(i, i + grid));
      }
      localStorage.setItem(
        UsrData.name,
        JSON.stringify(UsrData.setPlayList(grid_arr)),
      );
    }
    console.log("初始化用户配置成功！", this.getUsr());
  },
  getUsr(): UsrData | null {
    const usr = localStorage.getItem(UsrData.name);
    if (usr != null) {
      return JSON.parse(usr);
    }
    return null;
  },
  setUsr(usr: UsrData): UsrData {
    localStorage.setItem(UsrData.name, JSON.stringify(usr));
    return this.getUsr()!;
  },
};
