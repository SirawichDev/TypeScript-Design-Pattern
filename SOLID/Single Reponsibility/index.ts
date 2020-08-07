/**
 ** A class or method should be responsible for a single part of the functionality
 ** กล่าวถึง Class หรือ Method ใดๆนััั้นควรจะมีแค่หน้าที่ ความรับผิดชอบเดียวเท่านั้น
 */

type Player = {
  id: number;
  name: string;
  level: number;
};
const filterPlayers = async (
  httpClient: any,
  filters: string[]
): Promise<any> => {
  try {
    filters = removeDuplicate(filters);
    return await httpClient
      .get("/api/v1/players")
      .then((player: Player) => {
        return player;
      })
      .catch((err: any) => {
        handleError(err, "Something went wrong while fetching players");
      });
  } catch (err) {
    handleError(err, "Filter critical error");
  }
};

let httpClient = new SomeHttpClient();

filterPlayers(httpClient, []).then((players) => {
  recordPlayers(players, httpClient);
});

const recordPlayers = (result: any[], httpClient: any) => {
  for (const player of result) {
    httpClient.post("/api/v1/players/insert", player);
  }
};
const handleError = (err: Object, msg: string) => {
  console.error("Error: ");
  let messageLog = new Logger();
  messageLog.show(msg);
};
const removeDuplicate = (inp: string[]) => {
  return inp.filter((player, index) => {
    return inp.indexOf(player) === index;
  });
};
export class Logger {
  show(msg: string) {
    return msg;
  }
}
