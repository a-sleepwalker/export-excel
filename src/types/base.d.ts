interface RouteConfig {
  key?: string | number;
  path: string;
  name?: string;
  redirect?: string | 'noredirect'; // for breadcrumbs
  meta?: StringMap;
  strict?: boolean;
  exact?: boolean;
  component?: React.ComponentType<any>;
  children?: RouteConfig[];
}

interface StringMap {
  [key: string]: string;
}

interface Action {
  type: string;
  payload: any;
}
