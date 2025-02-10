import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import React from "react"
import { useRouter } from "expo-router"
import ProfileIcon from "../../../../assets/icons/Profile"
import UpdateProfileIcon from "./../../../../assets/icons/UpdateProfile"
import ArrowRightIcon from "./../../../../assets/icons/ArrowRight"
import AddressIcon from "./../../../../assets/icons/Address"
import LanguageIcon from "./../../../../assets/icons/Language"
import CouponIcon from "./../../../../assets/icons/Coupon"
import StarIcon from "../../../../assets/icons/Star"
import WalletIcon from "./../../../../assets/icons/MyWallet"
import ChatIcon from "./../../../../assets/icons/Chat"
import CustomerService01Icon from "./../../../../assets/icons/Help"
import AccountSetting01Icon from "./../../../../assets/icons/AboutUs"
import PrivacyPolicyIcon from "./../../../../assets/icons/PrivacyPolicy"
import PolicyIcon from "./../../../../assets/icons/Refund"
import DeliveryBox01Icon from "./../../../../assets/icons/Shipping"
import LogoutIcon from "./../../../../assets/icons/Logout"
import TACIcon from "./../../../../assets/icons/TAndC"

const Index = () => {
  const router = useRouter()

  const handleLogout = () => {
    router.replace("onboarding/")
  }
  const handleSend = (routerName) => {
    router.push(`onboarding/tabs/profile/${routerName}`)
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <ProfileIcon
          height={84}
          width={84}
          color="black"
          style={styles.profileIcon}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.username}>Guest User</Text>
          <Text style={styles.email}>Login to view all the features</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.generalContainer}>
          <Text style={styles.generalText}>General</Text>
          <View style={styles.bottom}>
            <TouchableOpacity activeOpacity={0.9} style={styles.button}>
              <UpdateProfileIcon />
              <Text style={styles.buttonText}>Profile</Text>
              <ArrowRightIcon />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} style={styles.button}>
              <AddressIcon height={28} width={28} color="black" />
              <Text style={styles.buttonText}>My Address</Text>
              <ArrowRightIcon />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} style={styles.button}>
              <LanguageIcon height={28} width={28} color="black" />
              <Text style={styles.buttonText}>Language</Text>
              <ArrowRightIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.generalContainer}>
          <Text style={styles.generalText}>Promotional Activity</Text>
          <View style={styles.bottom}>
            <TouchableOpacity activeOpacity={0.9} style={styles.button}>
              <CouponIcon height={28} width={28} color="black" />
              <Text style={styles.buttonText}>Coupon</Text>
              <ArrowRightIcon />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} style={styles.button}>
              <StarIcon height={26} width={26} color="black" fill="none" />
              <Text style={styles.buttonText}>Loyalty Points</Text>
              <ArrowRightIcon />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} style={styles.button}>
              <WalletIcon />
              <Text style={styles.buttonText}>My Wallet</Text>
              <ArrowRightIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.generalContainer}>
          <Text style={styles.generalText}>Help and Support</Text>
          <View style={styles.bottom}>
            <TouchableOpacity activeOpacity={0.9} style={styles.button}>
              <ChatIcon />
              <Text style={styles.buttonText}>Live Chat</Text>
              <ArrowRightIcon />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} style={styles.button}>
              <CustomerService01Icon />
              <Text style={styles.buttonText}>Help and Support</Text>
              <ArrowRightIcon />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} style={styles.button}>
              <AccountSetting01Icon />
              <Text style={styles.buttonText}>About Us</Text>
              <ArrowRightIcon />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} style={styles.button}>
              <TACIcon />
              <Text style={styles.buttonText}>Terms & Conditions</Text>
              <ArrowRightIcon />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.9}
              style={styles.button}
              onPress={() => handleSend("privacyPolicy")}
            >
              <PrivacyPolicyIcon />
              <Text style={styles.buttonText}>Privacy Policy</Text>
              <ArrowRightIcon />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} style={styles.button}>
              <PolicyIcon />
              <Text style={styles.buttonText}>Refund Policy</Text>
              <ArrowRightIcon />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} style={styles.button}>
              <PrivacyPolicyIcon />
              <Text style={styles.buttonText}>Cancellation Policy</Text>
              <ArrowRightIcon />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.9} style={styles.button}>
              <DeliveryBox01Icon />
              <Text style={styles.buttonText}>Shipping Policy</Text>
              <ArrowRightIcon />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.logoutContaner}>
          <TouchableOpacity style={styles.logoutBox} onPress={handleLogout}>
            <LogoutIcon style={styles.logout} />
            <View style={styles.logoutButton}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  top: {
    padding: 20,
    backgroundColor: "rgb(94, 191, 94)",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  profileIcon: {
    resizeMode: "contain",
  },
  detailsContainer: {
    justifyContent: "center",
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  email: {
    color: "black",
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
  },
  bottomContainer: {
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 30,
  },
  generalContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  generalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },
  horizontalLine: {
    height: 2,
    backgroundColor: "#ddd",
    marginVertical: 10,
  },
  bottom: {
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    elevation: 5,
    borderRadius: 15,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    marginBottom: 15,
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    gap: "10%",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
  logoutBox: {
    width: 160,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 15,
    paddingVertical: 3,
    backgroundColor: "#ff4d4d",
  },
  logout: {
    color: "#fff",
  },
  logoutContaner: {
    width: "100%",
    alignItems: "center",
  },
  logoutButton: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
})
