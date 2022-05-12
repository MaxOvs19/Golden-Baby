export interface IFeedback {
  firstName: string;
  birthday?: Date; // optional
}

const f: IFeedback = {
  firstName: '',
  // birthday: new Date()
};
