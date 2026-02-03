class Place {
  constructor(
    public id: string,
    public title: string,
    public imageUri: string,
    public address: string,
    public location: { lat: number; lng: number }
  ) {
    this.id = new Date().toISOString() + Math.random().toString();
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
  }
}

export default Place;
