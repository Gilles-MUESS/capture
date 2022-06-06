//Import Images
import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';

export const MovieState = () => {
  return [
    {
      id: '01',
      title: 'The Athlete',
      content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada lorem placerat tempus placerat. Nam et tempus neque. Quisque tincidunt iaculis nibh. Sed vel lacus sagittis, vehicula ex in, egestas purus. Etiam bibendum elit nec erat malesuada ultricies. Vestibulum sollicitudin efficitur sapien, at ullamcorper nibh egestas convallis. Suspendisse vel nibh porttitor, dignissim augue porttitor, placerat nisi. Sed sagittis magna in fringilla gravida. Aenean varius hendrerit elit, nec commodo eros dictum quis.</p>

      <p>Nunc accumsan, mauris in vulputate lobortis, lacus leo tempus sem, sed malesuada sem odio non lorem. Quisque eget ante eget diam tincidunt porta sed et arcu. Vivamus lobortis dignissim blandit. Sed sit amet mauris sed nunc fringilla gravida. Mauris finibus in arcu vitae ornare. Cras vehicula nibh ut laoreet dapibus. Phasellus eu finibus massa, ac volutpat sapien. Pellentesque eleifend, leo ac consequat ultrices, diam lacus volutpat augue, sit amet laoreet elit mauris id lorem. Pellentesque dignissim lectus nunc. Sed rutrum mi finibus ipsum porta, at euismod arcu semper. Aenean molestie vestibulum elit nec maximus. Sed pulvinar placerat tellus, in ultricies felis faucibus quis. Cras turpis felis, bibendum vel lorem sed, tristique ornare arcu. Aenean nec ante id tellus bibendum lobortis et id felis.</p>
      
      <p>Nunc sit amet lobortis leo. In quis dapibus ipsum. Nunc semper nunc a mattis cursus. Aenean vitae diam at metus porta malesuada. Vestibulum in viverra purus. Aliquam quis fermentum tortor. Praesent non urna pellentesque, faucibus diam vel, ultricies nulla. Proin ut ante non tellus pharetra semper. Duis nec diam a velit pharetra facilisis eget id ex. Phasellus auctor metus ut sapien congue dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus scelerisque libero eget condimentum eleifend.</p>`,
      mainImg: athlete,
      secondaryImg: athlete2,
      url: '/work/the-athlete',
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      id: '02',
      title: 'Good Times',
      content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada lorem placerat tempus placerat. Nam et tempus neque. Quisque tincidunt iaculis nibh. Sed vel lacus sagittis, vehicula ex in, egestas purus. Etiam bibendum elit nec erat malesuada ultricies. Vestibulum sollicitudin efficitur sapien, at ullamcorper nibh egestas convallis. Suspendisse vel nibh porttitor, dignissim augue porttitor, placerat nisi. Sed sagittis magna in fringilla gravida. Aenean varius hendrerit elit, nec commodo eros dictum quis.</p>

      <p>Nunc accumsan, mauris in vulputate lobortis, lacus leo tempus sem, sed malesuada sem odio non lorem. Quisque eget ante eget diam tincidunt porta sed et arcu. Vivamus lobortis dignissim blandit. Sed sit amet mauris sed nunc fringilla gravida. Mauris finibus in arcu vitae ornare. Cras vehicula nibh ut laoreet dapibus. Phasellus eu finibus massa, ac volutpat sapien. Pellentesque eleifend, leo ac consequat ultrices, diam lacus volutpat augue, sit amet laoreet elit mauris id lorem. Pellentesque dignissim lectus nunc. Sed rutrum mi finibus ipsum porta, at euismod arcu semper. Aenean molestie vestibulum elit nec maximus. Sed pulvinar placerat tellus, in ultricies felis faucibus quis. Cras turpis felis, bibendum vel lorem sed, tristique ornare arcu. Aenean nec ante id tellus bibendum lobortis et id felis.</p>
      
      <p>Nunc sit amet lobortis leo. In quis dapibus ipsum. Nunc semper nunc a mattis cursus. Aenean vitae diam at metus porta malesuada. Vestibulum in viverra purus. Aliquam quis fermentum tortor. Praesent non urna pellentesque, faucibus diam vel, ultricies nulla. Proin ut ante non tellus pharetra semper. Duis nec diam a velit pharetra facilisis eget id ex. Phasellus auctor metus ut sapien congue dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus scelerisque libero eget condimentum eleifend.</p>`,
      mainImg: goodtimes,
      url: '/work/good-times',
      secondaryImg: goodtimes2,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      id: '03',
      title: 'The Racer',
      content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque malesuada lorem placerat tempus placerat. Nam et tempus neque. Quisque tincidunt iaculis nibh. Sed vel lacus sagittis, vehicula ex in, egestas purus. Etiam bibendum elit nec erat malesuada ultricies. Vestibulum sollicitudin efficitur sapien, at ullamcorper nibh egestas convallis. Suspendisse vel nibh porttitor, dignissim augue porttitor, placerat nisi. Sed sagittis magna in fringilla gravida. Aenean varius hendrerit elit, nec commodo eros dictum quis.</p>

      <p>Nunc accumsan, mauris in vulputate lobortis, lacus leo tempus sem, sed malesuada sem odio non lorem. Quisque eget ante eget diam tincidunt porta sed et arcu. Vivamus lobortis dignissim blandit. Sed sit amet mauris sed nunc fringilla gravida. Mauris finibus in arcu vitae ornare. Cras vehicula nibh ut laoreet dapibus. Phasellus eu finibus massa, ac volutpat sapien. Pellentesque eleifend, leo ac consequat ultrices, diam lacus volutpat augue, sit amet laoreet elit mauris id lorem. Pellentesque dignissim lectus nunc. Sed rutrum mi finibus ipsum porta, at euismod arcu semper. Aenean molestie vestibulum elit nec maximus. Sed pulvinar placerat tellus, in ultricies felis faucibus quis. Cras turpis felis, bibendum vel lorem sed, tristique ornare arcu. Aenean nec ante id tellus bibendum lobortis et id felis.</p>
      
      <p>Nunc sit amet lobortis leo. In quis dapibus ipsum. Nunc semper nunc a mattis cursus. Aenean vitae diam at metus porta malesuada. Vestibulum in viverra purus. Aliquam quis fermentum tortor. Praesent non urna pellentesque, faucibus diam vel, ultricies nulla. Proin ut ante non tellus pharetra semper. Duis nec diam a velit pharetra facilisis eget id ex. Phasellus auctor metus ut sapien congue dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus scelerisque libero eget condimentum eleifend.</p>`,
      mainImg: theracer,
      url: '/work/the-racer',
      secondaryImg: theracer2,
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
  ];
};
