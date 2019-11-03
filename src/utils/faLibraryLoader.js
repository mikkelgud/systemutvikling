import { library } from '@fortawesome/fontawesome-svg-core';
import {faBook, faBookReader, faDungeon} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-regular-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';



export default function loadFontAwesome() {
    library.add(faBook, faBookReader, faDungeon);
}
