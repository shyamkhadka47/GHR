import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/uploads`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const sliderStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/slider`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const serviceStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/service`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const testimonialStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/testimonial`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const galleryStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/gallery`);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const aboutStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/about");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
export const menuStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/menu");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
export const logoupload = multer({
  storage: storage,
  limits: { fileSize: 1 * 1024 * 1024 },
});

export const whychooseusstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/whychooseus");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    // Mark error flag but don't stop Multer
    req.fileValidationError =
      "Only .jpg, .jpeg, .png, and .webp formats are allowed!";
    cb(null, false);
  }
};

export const sliderupload = multer({
  storage: sliderStorage,
  limits: { fileSize: 1 * 1024 * 1024 },
});
export const serviceupload = multer({
  storage: serviceStorage,
  limits: { fileSize: 1 * 1024 * 1024 },
});

export const testimonialupload = multer({
  storage: testimonialStorage,
  limits: { fileSize: 1 * 1024 * 1024 },
});

export const galleryupload = multer({
  storage: galleryStorage,
  limits: { fileSize: 1 * 1024 * 1024 },
});

export const aboutupload = multer({
  storage: aboutStorage,
  limits: { fileSize: 1 * 1024 * 1024 },
});
export const menuupload = multer({
  storage: menuStorage,
  // limits: { fileSize: 1 * 1024 * 1024 },
});
export const whychooseusupload = multer({
  storage: whychooseusstorage,
  fileFilter,
});
