import { ref } from 'vue';
/** 
    Get classes from props
*/
function propsToClasses(props: any) {
    let classes = ref([]);
    let uppercaseRegexp = /(?=[A-Z])/g;

    function splitByDashes(word: string): string {
        return word.split(uppercaseRegexp).join('-').toLowerCase();
    }

    /* check props true/false OR string values */
    for (let key in props) {
        /* true/false check */
        if (typeof props[key] === 'boolean') {
            // grab only props set to "true"
            if (props[key] == true) {
                let keyWithDashes = splitByDashes(key);
                classes.value.push(keyWithDashes);
            }
        }
        /* string check */
        if (typeof props[key] === 'string') {
            classes.value.push(props[key]);
        }
    }
    return classes.value;
}

export { propsToClasses };