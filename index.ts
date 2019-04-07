import { register } from "./DI";
import { Provider } from "./Provider";
import { User } from "./User";

const provider = new Provider();
register(provider).as(Provider);

const user = new User();
user.callFeature();

