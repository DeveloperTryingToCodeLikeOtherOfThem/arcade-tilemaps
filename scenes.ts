namespace scene {
  export let tileMap = new tiles2.TileMap(TileScale2.Eight)
}
namespace tilesUpdate {
    export function setTileMapLevel(map: tiles2.TileMapData) {
        if (!scene.tileMap)
            scene.tileMap = new tiles2.TileMap();
        scene.tileMap.setData(map);
    }
}