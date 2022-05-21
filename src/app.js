import './styles/style.sass';

import { ITable 	} from './components/__itable/ITable';
import { Header		} from './components/header/Header';
import { Toolbar 	} from './components/toolbar/Toolbar';
import { Fx 			} from './components/fx/Fx';
import { Table 		} from './components/table/Table';

const app = new ITable('#app', {
	components: [Header, Toolbar, Fx, Table],
});

app.render();