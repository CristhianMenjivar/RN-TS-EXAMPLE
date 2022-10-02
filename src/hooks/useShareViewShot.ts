import {useRef} from 'react';
import {CaptureOptions, captureRef} from 'react-native-view-shot';
import Share, {ShareOptions} from 'react-native-share';

interface UseShareViewShot {
  shareOptions: ShareOptions;
  captureOptions: CaptureOptions;
}

const initialData: UseShareViewShot = {
  captureOptions: {
    format: 'jpg',
    quality: 0.8,
    result: 'base64',
  },
  shareOptions: {
    title: 'Titulo App',
    type: 'image/png',
  },
};

const useShareViewShot = ({
  captureOptions,
  shareOptions,
}: UseShareViewShot = initialData) => {
  const viewShotRef = useRef();

  const handleShare = () => {
    captureRef(viewShotRef, {
      ...captureOptions,
    }).then((uri) => {
      const options = {
        ...shareOptions,
        url: `data:image/png;base64,${uri}`,
      };

      Share.open(options)
        .then(() => {})
        .catch(() => {});
    });
  };

  return {
    viewShotRef,
    handleShare,
  };
};

export default useShareViewShot;

/*
  EXAMPLE USE:
    *Imports
    import useShareViewShot from "../hook/useShareViewShot";
    import ViewShot from "react-native-view-shot";

    *Destructuring
    2. const { handleShare, viewShotRef } = useShareViewShot();

    *using in Views
    <ViewShot
      ref={viewShotRef}
      options={{ format: "jpg", quality: 0.9 }}
      style={styles.screenShot}
    >
    {children}
    </ViewShot>

    *desde un botón llamar la función handleShare()

*/
