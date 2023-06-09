/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/13/2023
 * Last edited on 03/14/2023
 * File Name: Scene.js
 * 
 * Description:
 * This script contains the code for Scene object that
 * stores the screen objects in an array
 * 
 * Insparations:
 * Three.js
 */

/* --- SCENE --- 
 *  The Scene object instantiates an array holding all the Screen objects
 *  created.
 *  Constructor Parameters:
 *
 *  Methods:
 *  -   add( object ): Pushed the object to the _objects list
 *  -   remove( object ): Remove an object from the scene
*/
class Scene {

    /* --- Constructor --- */
    constructor() {
        this._objects = []; // Create a list to store Screen Objects
    } /* --- End of Constructor --- */

    /* --- add() --- */
    /* This method adds the given parameter to a list to be stored
     * and then used by a Renderer object to get rendered on the HTML5 Canvas
     * Parameters:
     * -    object: The object to add to the scene list
     * 
     * Return:
     * -    NULL
     */
    add( object ) {
        
        // Push the object into the _objects list
        this._objects.push( object );
    }/* --- End of add() --- */

    /* --- remove() --- */
    /* This method removes the given parameter from the _objects list.
     * This allows for easy removal of objects from the renderer.
     * 
     * Parameters:
     * -    object: The object to remove from the scene list
     * 
     * Return:
     * -    NULL
     */
    remove( object ) {
        
        // Remove the object into the _objects list
        this._objects.splice( this._objects.indexOf(object), 1 );
    }/* --- End of add() --- */

}

export { Scene };