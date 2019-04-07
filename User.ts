import { Inject } from "./DI";
import { Provider } from "./Provider";

export class User {
  @Inject(Provider)
  provider!: Provider

  callFeature() {
    this.provider.feature();
  }
}
