
/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

/*   Enum of CSS Classes for the static elements   */
// var Tiles = {
//     Wall: "tile tile-wall",
//     Space: "tile tile-space",
//     Goal: "tile tile-goal"
// };

/*   Enum of CSS Classes for the moving elements   */
// var Entities = {
//     Character: "entity entity-player",
//     Block: "entity entity-block",
//     BlockDone: "entity entity-block-goal"
// };

/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
var mapsArray = [
    // {
    //     Level to check collisions        
    //     width: 19,
    //     height: 16,
    //     mapGrid: [
    //     [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    //     [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    //     [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    //     [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    //     [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], ['B'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    //     [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    //     [[' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    //     [[' '], [' '], ['W'], ['B'], [' '], [' '], [' '], ['B'], ['B'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    //     [['W'], ['W'], ['W'], ['B'], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    //     [['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    //     [['W'], ['B'], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['G'], ['G'], ['W']],
    //     [['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    //     [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], [' '], ['B'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    //     [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    //     [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    //     [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['E']]
    //     ]
    // },    
    // {
    //     Level to check endgoal
    //     width: 5,
    //     height: 4,
    //     mapGrid: [
    //         [['W'], ['W'], ['W'], ['W'], ['W']],
    //         [['W'], ['G'], ['B'], [' '], ['W']],
    //         [['W'], [' '], [' '], ['P'], ['W']],
    //         [['W'], ['W'], ['W'], ['W'], ['W']]            
    //     ]
    // },
    {
        width: 19,
        height: 16,
        mapGrid: [
            [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
            [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
            [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
            [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
            [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
            [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
            [[' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
            [[' '], [' '], ['W'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
            [['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
            [['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
            [['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['G'], ['G'], ['W']],
            [['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
            [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
            [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
            [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
            [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['E']]
        ]
    },
    {
        width: 14,
        height: 10,
        mapGrid: [
            [['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' ']],
            [['W'], ['G'], ['G'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W']],
            [['W'], ['G'], ['G'], [' '], [' '], ['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], ['W']],
            [['W'], ['G'], ['G'], [' '], [' '], ['W'], ['B'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['W']],
            [['W'], ['G'], ['G'], [' '], [' '], [' '], [' '], ['P'], [' '], ['W'], ['W'], [' '], [' '], ['W']],
            [['W'], ['G'], ['G'], [' '], [' '], ['W'], [' '], ['W'], [' '], [' '], ['B'], [' '], ['W'], ['W']],
            [['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['B'], [' '], ['B'], [' '], ['W']],
            [[' '], [' '], ['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['B'], [' '], ['W']],
            [[' '], [' '], ['W'], [' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W']],
            [[' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']]
        ]
    }
]

var tileMap = mapsArray[Math.floor(Math.random() * mapsArray.length)];
