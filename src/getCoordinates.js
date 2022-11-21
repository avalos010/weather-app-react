const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        this.setState({ latitude, longitude });
      },
      () => alert("Please Allow Location")
    );
  }
};
